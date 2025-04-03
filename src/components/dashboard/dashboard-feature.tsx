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
    "76ZGU39ifdEi2sJ1oxix3WpSdY6Y4L55qwUwQexTrZd15DMPcuMwFN5Bkx6q2UPHbXtq6bjWbnVw3XoN2yb4hdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nEsQ3DxTAUN1srKg9ZKmiR9GXoNdLQfaRd1TXbUi76vAMkCNaCRf7eHfTzvmU42HZs3DDAqoDx53vqjNgZfxhJ4",
  "key1": "3hWLhq6pXHSNPPQ7xBXrJQAQmKoPV1mkBqit5qxkfqxS18Hq2csvV2skz6juujQZozJF3uBXBjm1kBXnxbTVQpbq",
  "key2": "Lbw28sWCxD22KTX9hXR4nNhxbtZiDAHPUYhsioeJvEr4ntn89F3j55QCpk1FXwFGEpbeWphSAZVGTw5NriUNttM",
  "key3": "3MgG9Pi1Qb3RE3snPeGRB99k6LT1ZYiwYt4kRv5kUg5DHW6aU7E6ajp8KP5td383ijpnDQE3DFh8rDCQaAfF8p9G",
  "key4": "51K2sRoszwGSWuTjHGLBsnEEL11yLFswY7sJduNE84HiPDxqd6mhnJWWk5RCzi5jbtntwxxirwFZopKNmAYWX6fA",
  "key5": "W155QvuTgCyFaR2pvMo3xUFVnnniVrTsBYsYCdLmYPydg3zJb6g4Ak7ZV1qAzKEngkqkYsd4VArNqAs3MuW8Wd5",
  "key6": "4x14oEaonVAtSgWDJT9ws4xS4e1BB8xiLib4yjxmp52XC2ovaBrQSTiNyP5WtaDgkcwv3mPuNacxBj1ru6QS2129",
  "key7": "3YmJWCYjps8TBuYu2ywM8nfTq1T2t3oSDXSgbiyVkxXUgVyEwjLESSYMSFAcYjWtCqW6pAst579fRrES8iuwn9wD",
  "key8": "4etRnCd61wNQcLkgPwzCqY6R5uCxoc15gyA9xWR7Hp7Cwfb37LMwEMnRRnVfgMT8roa4kGFRtAPqgHqgS9jBrCVw",
  "key9": "4whBcWjpX79vpzE5NNMow6HDi4Xyb2uFbzzG18EHyqPAnnreg6jFFPeki7VXnejrwFwT1hcgZReBNPR4AhedjQ5u",
  "key10": "2D1vExfFX25TrY7DXcgX842A6B6QxJsFvMkUpk2rKNFqpNP3qW5zJJ65NsKkGhPaigy7VjcvxoixnQ1dUnnHRANw",
  "key11": "49ynvKoJ35fu875ABD7bMk1ZGCzKCnEtrs3xW332ZXmSNaRb1RBErbuxSZTBZCJj6JvEbo1HWECNyo2h7ykKYeVd",
  "key12": "5ZHDi34wZrt4s3odQjoTcB6duo6tjbrpkJZutmpacSg1SevRizkXYh3EpJhwjQ7GBNajxS8pukuZ85WC4BJe2vG9",
  "key13": "3Mg9YHoFcL2VXvSoeeucE3eXm2twtmnCDCdEa4kBUGqW2XQVnw2KDyR7NjCUatA4nXw2C6NqRa9ZKcgfeWMS3Qwf",
  "key14": "rAmfzH4H9zXwyDCZo32AQddHGqQaM1X32LakfiCFysy6b5mHJDKgcPoT8xrZCqn3hgXUHbRvtqPj6U53ZyN2MAk",
  "key15": "d66pHUj9FH6KtSJ1XgZsfDZLoDyJf7ZTTQDCcShujuidpVrUxAWpJKrZUyceYhd9ecV27AquPWxQHstwRH2sjfd",
  "key16": "27aghCWWkPJ3gcEUmuGosZ4GFzvfCKLdDWu8LTcwf4av4eJaqGfRAjGAWqvf5cpViTiu5iK8rizXx6UBj8x67uVj",
  "key17": "ueJegpXEX1rbY5tLXcffbuvebB3KR2aMazWL5mGCwjzDFD1WL3D5h29SzUJUWjWmZsTBE4geGHX5mJ36j9hHNHH",
  "key18": "4gETdj6t4KNsQSnAMvgYLyQK42oY1ukXWh8yk8hvwg1iBxzTkdccLRMqgaezxnyXDLeYduGkZkECpAyAH1xrtHYc",
  "key19": "2JcPqKfKo6pCVkpf5PRaiYdTKVhWHGrorS3TQrvUFFhN2VuquzjqYS6hX8mdpxXytw1uVLbKGcAsdydme3W7kr1V",
  "key20": "3cFqCu4eagxyAiYo9qb2aZkzrGqDUUC65EwDNbzer8Mj3WiLRNHBjcwar8sYTfKfueGa8HSDvyEhr3rMu9CXZJWp",
  "key21": "5vMxDdbeuR6wvJPsZewZyNF1vK8bSiWQBHuVojBYKP1rEHVayUQ2YrDXqshYSePnoPHr9xFAsjemzwiUBS5bWty3",
  "key22": "4EGf6LrD2HgjNEsBffsywrkCMaG6h64sN35asSjaYVjWyySx9N5vv1PgX6UR5hqv2DLjHhH6TnS3iEJiPs8cC78B",
  "key23": "4oFSmUeKnP8eCJ56eW5F2cuyzgJ3X2u6Tm67F9iEjm16JACUfhhobRpLp2beVuenah6VeZzyvuyFPv91gZLmpvEv",
  "key24": "5SSiCm9sNMZKJudQRcJzMTsch7UuEQKinaoGFKNLoUQUxSb7LFBoYLqKgxfpxM7z8UrfjcexB2EFBXnyEwv12pe7",
  "key25": "2ggNZsk1LBSmBpyLciN4Jo6QRPjdfDmg8QTmL93Nyt5StKqWCXcGWUuALQTcuR5EzV5fjWZPsHmagd7LTVvmrSye",
  "key26": "5at6uQWW7yXuEuUUSb556tp2eHJThM7coPFQHprjAVyqeb4LoiHep2dWPBrCoQgzHvpLFJa835nySGgDKEFBeCdd",
  "key27": "4GXTyxdpNEjD7kTAgo9v4T8ANQX8scYCJ6rrZ6anhcys4MMNnttYgVKAuWrxK32rU7jaM5Terp9pFKz7p5C9EfnD",
  "key28": "5vGz2BwkBukBqUMTtvi47j5XcemioM4Jgxj2L3WAyRZF7eShRnHhtYbCikLCN9snkinWfBsoKU3UpTHKhNNxZehL",
  "key29": "56ZhfTG8ufz6pQJDZeXhsnXox41efP3Qy6KyvjSYTy7o9QVFo3uM8QoauJ26LxevZT4K9VhspRsbmvRmR5H8pMpB",
  "key30": "2BgaS8irLFMDRrs5pf2NMmej2Z9m63c76FJwtBWspcWVwSxzsDNNf8u2JWw92niu4NnC8uj4m6sJvZYgoD8U9YqU",
  "key31": "4J3rVyHKEA3TwMp5QesCaG4MY13pMQb5XueunyS5W3vfCChSLCaDtZg4EwhtLrXyqpzrYuiM76uNBBVYsktVsFw5",
  "key32": "3Aukh8Z2q8py5NBojAEAMWjzWQrxffEodbqtqZiX4RdrtaP4JLA2LRENy2qDLepL14TpP3atoBnuteE3Ukjbnjty",
  "key33": "32wVo9rRnokewF4UVd4NB4J85r7DEfTjiXgi4Ex7yjJHrAvnpeykLCNa6jNXB7B5cPr7BaoRPhdZEx6qXMUenu8C",
  "key34": "2P7UHePp94T64E2axjHvWicoaApKPZXzRhK1stLu6gzC9qphZL9yb2FseSzyjsAkuphnnfygDF55bcDmzrxsF26S",
  "key35": "p1FdG62XCwytgyVoJrqkwkizjkc11GqcaA65ydNbjvgDekUC2nnCGRvbJnKc21ibpzfJBHMfDUGHS27MKYMA72P",
  "key36": "55fvjtiPAWZhfyyHAUpqf6rPDqXoHVzxC7MxRLVa2D8Dt7PmdnjMZzDhXrMf5EzqG8mKb7tmLwmcaEVM3hkC6F3R",
  "key37": "5SFbzkJ6qv5QYR18DJSZGdgWJpzeNRoTk12gGv2881ZM49YorDHtTSQysdjSWLSHkoEwscqMcWysQVbVxRef5vDh",
  "key38": "3g4gAvTTtHvncBk6uwRLvEEEwtBsHyETDjbkX7vQtQW7U2hk71hnCRcGsRsxC5A37n2y9uEKQeVsUQDw2FBbi5BL",
  "key39": "2T5sdt252HLhoL8YpyVmvTnibSzg7qga7L6H1HF1smg9vW7u1nQPpKocmEU8UpVUPvqCcVsY9a21JUfQkvB8bAX9",
  "key40": "5HV63LHENwiWFBmDo5dDyNkVhuox7Pkk4Y8SwspM8MoRAvKaTi6G61fyJJPtNuAmdnnHpXdh52Y55qvg198FFWBJ"
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
