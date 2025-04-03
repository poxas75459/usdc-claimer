/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3rQn6MPnkf8m9GC1zeDaT6shRrb9JTpMxuC3YQTTgJCdauoypimBFDAhmhdrkN9nzvca3pS9bRNvEbQRZR7i4oGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6sLAgABNsngKYFUXNr54bjRNmRJVe36YR1oQNG622RVsSNAdCsQEG6uD1RfVxySsrprRrYxCUg6S8oDjtavTET",
  "key1": "4Yb27KwLBmScBJya62dEPJ8NyAavPYVFuPy2wcaKMBS2YLBwb4mYbgZvy8y8ttn6stq5kJyfGqN9G256zkyD5P3h",
  "key2": "2HJom3xQvNEQEpHHQPo1hQvR8hT3x3mB4wCfEhXgVoubnEDAZ3aG2wvDqxHCvf7K72SPdSyJnPny5nzZ9zzreJnj",
  "key3": "5z71qEBbWseZL7zwUqnoa891gQzDoWinsA1CKDUA2arjaK9qEosUE9izocYJePz54E6EVBr7KyUyPqjhRYg5bfD9",
  "key4": "3LG87zCLpSCkxgbpq9Gkr3fvL19kuxLABQte6NngRAyw7vEeAW6uU2AudoEpF1okG5Cf53d5D56ZGi2g752fAgvr",
  "key5": "yvaCFMkscCwU1t39GgGLXsTPdVKF6vMEJaNwACuj5HSYWfgddkrWQGyejgrS731xtMy1jww3uJsS2YYx1kLuxb3",
  "key6": "2z5Jpg78A7GovzGrnZa2g7fhDaSSZG9QE5hgRSz9fLTTBXKUFGKan6rhHnJhVS9tWzhoB5daytjVdPuEhXTZZh3w",
  "key7": "76ycLV4PqrNXVSFCVS44mAe4VopjM7Ar13mxng33tp123q9KU9VEWNy9zhaH9uRtLC1wKbQt4uTfsqvQw6H34Yo",
  "key8": "4BoMjqyVsRivacZLUY9PLWi2kesVdEkwDTPtY3Axej1BArdxuP2UdUG8bdbQhJtzkvLcoQgPuFAMKyP1E6Mg2uJe",
  "key9": "4ijuXpYKgWzDmw2ijrwu9M3nXwaPxadWGy4cmtE1vgdVBj6bjQNfzMNCB7MSsQALrsUjYk4tPdTq5GKmwkQcq9xG",
  "key10": "5JW9kHonUdapn1f9bKzcX5dWjcp1jCKXTRgAJxhL48WFPaRBoLRFCfJQWpTqgL6nG46PyFtBaUVpJdfqunkHw5tv",
  "key11": "48y86ZXQ6ewrgTZ5ktS9dR9ADWxHbjnEYF2vKPhua69ap1HuozQEQS4B6rJGUKVhmMNeT5QTPqKQw2BDJ3xjqYR",
  "key12": "3FY7VH2P6ZSjptpVv76qJ8LzprgJV8NuW1K4VdTQZAzMu4FY1MxFAXDaDEbk84GrumxsbckBxKk9Hy1bVMfjojH3",
  "key13": "5BGudbyi9eEikgmWDxvAFUhy6vnKfShG6oj9fyXKJQgwinHbKpw6A4s4fh4LE4DuB6iDU4kL8yVuSdLE1piwe4YN",
  "key14": "3pd14BRP3dxYcbnY2uj25u9foyqVXZ1QhnoPagSg5WR3Ck7y61ko4JoD9spVnfchK1QEp9xAHGZ3D9JNoXQC6ZZg",
  "key15": "2kha3swHQzYnVknX6pAHNVbnFArjCSvsbyDvwqk5CYygNPLUEsy161qyC7xFUA3Eg2fm7NNHp9JdBpZqGSdUbwEt",
  "key16": "2RxaR8LBTZeoJurehxrm5hgAnw6ZnLCFU51W9Q5dZNkN7KKKMxV5G4HPeuVYMtTeVPVfYfaijC39iy1pYJ3NVyZD",
  "key17": "2zKQdDCgrD2hsHCg8vTRv88SewBAmRGJg3pMoKqRwoeoL3EtwaaL9r7E5PPoYRWaWSE8crSqZjm1q33KSsN5k9yQ",
  "key18": "5N9iWiUf6WbUMZdqHpDTEUt6KU9VHAiZyFPqSq2eHLsDy5qXNXf1RUKuRZiukW2ZLUKXWWa1xZkJppPMzGnJyZKw",
  "key19": "3ug2zGFpAHjuUH9HaE3cnFpNa4iLa5nyoCZzxBXz5rjnA4QvbH5yHqyGd8VNrTHH81Lxh8zFoix7zJmFoUcHRZxG",
  "key20": "3mfkk5ouE59HenRBaqkEQpr5zFxbZTVujXdeKbB8QNaPW7Xohua7KMqeEHNhhybrP69egMaQCzqUynUSuy3TkdhY",
  "key21": "ibdwSj5X2rnZnyrFeW3QMCfYGJM12NMdMNFYmS4Tef1wYE4f2UJoTcAXL2LGTFPxCDdCC5bkVfH47Lm7fUCZHCz",
  "key22": "2kAGq5U6wTcAo1e7sLwvg8APwEpAnXmuokApMJuULpGgiVFCNViVnbUMAXFmriYqrFZ8jM95Yfxo3m44SAJu6MgG",
  "key23": "3FYx11kZfkhjEXhy8HyJ8o5AEWU9DffGejHNDBFJrSkA2UwY5fW5xcBh5kNQM57auaZnKg3GMRn2gu8i1YrqCnG3",
  "key24": "5rNvuL3bWLt7gXnQZqgEAmifbA7qCYqTX8SjYoCffNz45aEJpFenF4S5tdvFNXTajzMxaSXxwxs9tBtXW6s7zWCF",
  "key25": "5idKiGFCefpBohadtvkrYyeknS9S7ex54hVp4v4bzsYMjvriquqbFurczNY3o1tAsuU58LmNdwtk1qD9f5uZTL7",
  "key26": "3k8GoszL1XUppY927uQJ3XVYf96BJBDMSBeuS3jXwNKTmB3yyhJ9s1wgSQveoErnuuooYs8jGCzHNstR3dAFEDUe",
  "key27": "4TmnJTBmXDXeMTWL8ZdkxBDMm6YitdZdHN7XNw9kTjRUTRsBgUBUd3zgWtkT3UVGbuByfCBUAabfniJZSQZ2TUPh",
  "key28": "2zffpZmqpQin9ZLPmJRLYBq64DGCLgJ249BzxrioFj3K3G5UzybTLh2CThM9Jc99Mfo3g57Fe63S2MV4C8J7nFLZ",
  "key29": "3FueCPuyi1DVT61RfVCxvLgSw6QPsd97bdhsqmDJrJvquL7fVtmEGBmoLVtdTn1XftBVcC7AqQYeS1GDKYM7P9bB",
  "key30": "4dgYrbqPHtNSCR51fAZCN8QRSZUng8DMBZVUFB22PWEMzhudb7VGrjrvLdVaCxstMotyoyjRF3bya5XwrNpFFoa1",
  "key31": "441QRcN5djr8ygBWK4muDQLcsdg3FEKdzrJz2VT3GidfYp1bYV37JNsG5xvzpKk1peqBNBgakwvh51nBFWFQjAkr",
  "key32": "3kYRATFBHM36Dq78y8rNYs2ehxkUifP9MEm5PBd157kVasRApZfAQfdbXiudFPEaPtGJDoP3drsgmPLpaodS8v4x",
  "key33": "3Pv45BJzQdrG4XAapCJBSVFn2pBMfvapun5gy4AefVBL794x2J1XuTtskWTapvLrpJH72Tvrw9wp85s8FTwuBczV",
  "key34": "37yRXSWpSgggVTQExZZEerZmRfMbQ9jWU7hUF8YtNNadMdegQ8YjMDE1XXvrPsEnxWH3nVKJiCciYud8BD1WsXcA",
  "key35": "545kYVXhi8GDnBhtYt8gz9y5dZuSL22Y6nnLSocKHLwvvZBquMsD4LGogbxAFXWQaHM1fNVr3M3yFHB47zVeMRUt",
  "key36": "5sFMn5KfTApSQQ7CSDwe1CsoCJzmadgFKaPoBi4vg9yTLxGXAAL4NLHa2fT14zt2W1cTvE2eYL71r2cDUrtFqVoL",
  "key37": "Q55ioxG9FBz4mxp7u4iPHqBofhJ88n3BaRFNQgchQPynjL1PErP1YqwodUspT47rew2DtAq1upqHfnqrKW3j9BQ",
  "key38": "3H3WpJcHMvSbp6tGceGnadyqQGFbMoFiRFP6Y77VwK4XGSEVyUBMsBEgPqaCBXnmZidfnvxG8sefXhPADP5CcqbQ",
  "key39": "44hVcifeU4EcTVDBzU4VPfispyXfXHAarup4rp93TsJpWqx1X3kU2od1hyE79Ti1Z9p79gDCM9beN5Pis2itzvri",
  "key40": "5EUPdu472FSFnCPRAufcHYdfq8r6SrsjPZU8n6YC6dEkbz3uPFeVN6CDUv9AyDuPRgsGnM2KjTeKxd3hU45KrWeJ",
  "key41": "34gxoWqRmqLMy4tsHGU6opRZHeXf65wqcw1uQzd3QhWTESffh2TstPKEjtQH7WfjLnmRDVokVKCeEH2PheyMxTZP",
  "key42": "urEJ5UyxSiyxx7n11TrWvwDNJQ8fRkEZAo6fcvN7DJ4ZEffJtyojt19DqbkpXAjQvs4uYBnW2zvruCfMjkKkTX6",
  "key43": "5rkJaLixCmABeVCbpudRVAFhSLr8bqS6MBZefNNv1a5HeN69sejfCB1vS749VvkKKNV2UnSwNUpRdiYK7R7P5b7t",
  "key44": "3WpoKKFCwCjvnYucpHGeHP4WxjnQWvjJ9eemBAKQqc3dsqttYjfa5LYt2vZeV9FYV7CK39hMerwkjTHQnLatJYtJ",
  "key45": "33ummHAvrcFZp1C9xLnHj9cgVosuYsQyJe7mJWXpmvgQXonn1NSERb3YSHLKJbnbPhhpAN6nAjzZ55KmduFSRsS6",
  "key46": "4AuBKZxbdKMNNLWvh8HaBoYVkwpGqf1pApWjZ3ggG8g9WMVt4gU2DECe8tZven55RvmgfJfjAqjFBkxyd9JGdUgn",
  "key47": "3gvZw2kteBRuhtg8YkPpFC5uZ89Fd3JCfqHnSvTZ1mcgs5FYwMN9HaRg9qKVweu8gfSR5CbGycj5zoqYKNhNmHVm"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
