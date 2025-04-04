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
    "563kGAYPDJEHT6sXUDLjT1FSkrQus7Yc9hShbrETCjAk3Z6Pvdsxi6mjwvqzsp3p23CaAWFAE1k7YoUt9E7thUCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XBPQT4W3skWJ7bvdafoNvmYnSbnJK5aCYiTBgybC68z6maJtt6uTfecmjTxRaJREXGC38E7QKoTyUCXRZBQnYKG",
  "key1": "2htE3DZ1riHihDZDjXZNYMjV62B9rVxvGZGffHfSddcJ5ucCoq3cPbEiTJuA3rfAaNiMjGJzhzSGFYu6E4QNx73u",
  "key2": "mXCgyFiN7pbDBJbiYnXWTc5j5hGEAEbmWwFaZgrYjd6dCtkoWiTuMrgsgCLa2J2pCMHTvEQysqUXYYp8WsNcKGc",
  "key3": "5F7S8PxCzdGWXjfiQgRsu1nLYZjm3JY64noUT3rShoMQr8ocsTh1S3pCRrWgajkEvAaeQhLi4itLtQJQ8MfF7XLt",
  "key4": "2m6uu4n9gXv6QiBr4CAcKpr76KcmHw5WkQGQmd7R8UH4XnEMgJkpoU3sRieUbfa1CPfAowTuoQUFp1iCCJnYEqqp",
  "key5": "37RbXv88MRj39k5Xwc3McsY1MsyGm4n4oSjC9RckXn9VxWBEpw6vVHX5W8ng43ZJEDcPoLjHRSqWx4rhjK4Zx8tw",
  "key6": "3xaYxMgGw3cWkMN1jmU1XZUWUrwMwPBmAQpNB4yYQWqYHBpdunPAtZTWigCPRM3EY3ZSvLjHNhcT9pLz88X5Jg2h",
  "key7": "2WLmEH3E7vJcM9WUbp7faWTaAYFejVQBu3KHP2WYtKvrXMN7ehKJTepAfCkWjwqTTXJb34FpK8PcVJvz3ty9gvTy",
  "key8": "QJT1cgZUxeFsCeXNCuanX1yzfu7LrvzZ2CXiYP5H7jzFoYofksRsAvYEpPQcLzYBhFVfUJjTgEEULSmNVLztncy",
  "key9": "3DiChMp962Nx3S4mfHRK1QN1ucKkisgY7owRaiPyxh3ZTNaUNsMe5ThgCMgoVanumg9tZPkRaVnGPCMaBKw7MmGR",
  "key10": "2FJx1dLPSfUNFkw91NzqeTwAbutSeWJghfVrR7UaBaMA5Vkn2MYR519v8WkvSwrMhjJQLNw4esvpp4rQPmmmSJvk",
  "key11": "4FvqETN6vVb3G4mYTiUfTS22giJtaMMLz78aheoiDaL4AEPUgx4yVda6XuFTJzeDnGnzv4fdM2ioLJs5gm8YQjcL",
  "key12": "5YeBtWNzqnkVSepBQ9pfeWWmJKJ4hLYLzm9nVd83Qut5rFmCLrPCVBntsEuPVQ9e2UphSQVwDJG21P727c6T2QyD",
  "key13": "pDnbvDEbBfeSywqpE2dmFG4G7QdNP7sv4gDH7b1SQR3HTmzbGeZXHpfcDcxEdAvC5UFgkhqts8MnMEQFmSPHuQT",
  "key14": "3BpjcnKBLXnvYb3aXnvfnLipsc2rJESvPDULpRTLzFRrH3TjyKHVud5wLQC1bWoWUHyr4fLJ3cPzN76Dph1xkYnS",
  "key15": "4s143FdBGCqSPXt3ppdqmb9KJLwHN6EB4MeybBCpAMX5oYd48MjftDP22udcVsAERgHSW9be7AWPiQeTaJLeAPAK",
  "key16": "VWULgYmfm87pBHykmjoozhSBJSx2gHnj7X1emvWaTqqwXsXWqBtjJDP7RqUWruBKuyGZVUBhRFjgxJgFCV6BUSc",
  "key17": "2MxDShDXcRbfvq9erQiFsT2wPULkQnTFA8vqHSiSacdQ9nk8eohYhL3QP44meoGAFjS3Q8EL9C5txsCiGLBHJd6m",
  "key18": "3P1TASjrzXNLap4BrDNR6ic17sXDb5kPyxAN7dUAXcehLgcMnzyTy6nWPF4z1DUCwzmi82Q598e6qXiRNeUjWPd5",
  "key19": "2VktKxzjya7bxcpX6cP39VdqvPrmBb6kw7sp7RooHEoU6KzLAJR2YQyGaGAsPrerJ6bwgngNyJ9XwTowUwJWiKcM",
  "key20": "3hdpdJmWcCK3xNAAq4dkPfRSQbkqbymsTDgwqW1bc29SfHSqvsWhxtk8o2XNKmf9UuoFV8NKA9ytk5kAkevCWXNd",
  "key21": "64RTndzfYKLXDx39VPhecX9Eoss2YpgrFs1vBCVjACPcYAfcUYfRMrk1Uo7SnWVGw7kRVL6qYsqVPUCkLaPhTUAL",
  "key22": "2dg1BSNTs55zqxosLry68XBy2cyxQ5uDCMcgVXf3vpegdyh1CTvofrisP1Mkwq4esmDyta8tcGEWnwtoPxZRjjyg",
  "key23": "DdEB8hpHMiM9vTn6U7VECX826N5FpqjnWECdpEffMcQgYJGhKAUp2SbCRVsYbyivwZdjSUqaFB99qVr66wjByKP",
  "key24": "2sHfzAqwxP8udnMYY5fsjmV67E3eXkakoYVj3FBABansp53hCp3XR1MTKgkyJrf1qj4eeZppMo6LxoL56B9Rw5iT",
  "key25": "3yHCz5c8u6x6CM59pS1jsgCzxUjEUzGhRrLaHiCjPhk2HSso1NZQyW75uoT539L3PdybRyKyW9QTdhmw5HivrSVX",
  "key26": "5bEqMEyhdLGXoWxUBUmfABQEMhnBji5BbfwaWQhFVfMwf2grZDuP8JxA6r3uZzSyPvvVg4fRvHS1aUQzDEB4SFQi",
  "key27": "5qxPovQd3QLSRaKN7iUSamAfnv5ChFwJfEfobBpUwNdckvxKaTw36KN39rCw57dkXSfPshzroSRE96jcocUdm43q",
  "key28": "URsMq4L3tyMVNEBM7VzcfGu4tn8PEt33HDbbjU88hDu5oE9b4AN57NN3fZZ2GfiG4bFKEKLiSpZLXGNVqtGP52H",
  "key29": "3oCET8i9uQ4a97xqM5GCwvACBFxyJFo5P5hn76LBxbScUnsyovXk5cmUSUCEmeN4VfnWJJeeJrC1FcStXzpEk4r6",
  "key30": "3DraHSHpk1k54ZwzzAoxRvyQhKY1xjpUZqggLm2iuiNA39zuHghVYYdiHV5KW7fESZMZ96esr6JpMDm9xxnpDW9F",
  "key31": "NqXRhnwJhMtTEGDbwsVQuvnzzpKDS76srd5WHa9dj2ZPyz5c8yxWE96iURVZTHTjB4vpiwGRoXANNCTUGhpAKzG",
  "key32": "3zgm8Pmz6bChn5nRmwsAnaadUYcKaNN3iFCXQ5XyecAzpjtuPq1wh1eB9bzCj59myRKSvs29CaktwyEv9vNBqvNw",
  "key33": "2tU4i3Hm422zwtDJrcJjs1KMZ6vrQtg7C3H3ymvq59NT2nVCsKZK6sGnssAmaXvrxhTAuP1nQ7X3r2gnyrGUopnc",
  "key34": "4ucEToHRzyuE9jC2phUDaHscCjqcvgWwEMP1nftk8iwzSpSGBXVXXciE7YxiXScHnuaFj9SdngbnkEgmC6zVqBgw",
  "key35": "5xmFkbeCgsmy6WVSvt66oGNbfENLkdyX5g2Dc8DYhyTvTJtq7ZfYTCUSJGxEhrdq1rtmLfuc1iDntp8DhH4Q2Cg",
  "key36": "4B67ksieCRxkXpS8PDFkY2XAK71qAVLdxB54C8t5NRdUZd9M5HWuZZ5VCi5vjeNhXnhAFSe6ja9MhNtKNtr7WVwW",
  "key37": "4AHmBxymwMRq9e9y7VLakfSj4MzP2f6S3CEV2ZsJMhpCsHLgFciH4nxZwwjCyVnTBzbXeBNJa1kJTWqepKscBQqJ",
  "key38": "3NDxLY8HBSZhTnuE1w78PfQAnrbyADZmNzm2A3fiXhgwms5bYy6GmkJu6N4TiwxtWK2zwRhYoQk26w8WeEvGWx58",
  "key39": "2f6wYRkVEmGcGAyNYFN3aARgeEcv2SdZHn6dRyLVCytG3Ert9rydJPG1fGJrm26wiBxjQ6m7iBsHrLbcQr2FvZEL",
  "key40": "37qrQgg1eqUup2Ma3jwf2Upta7wXP9bQu2Cvh8cTy56Ftr1iq2oCfogvRxbcv3mTeazhBuaebyrobMdNeX97oDNM",
  "key41": "5zujh2Es7gqjJZFPH4hND8ToxsUxxkopzQ5SNChVng2N1nKPfQ6ozDRTYFLVHtgM4Rsy1MjZ6hcY9s3UymFjvtgH",
  "key42": "3iFGpsE7qpqPknqEeCzKjXwzq73UW2FCPBdTXHAJPwfZ49vScRyMKXnaeMKeqBud8x1f5jQow9Hgm3FsVdK15Ynj"
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
