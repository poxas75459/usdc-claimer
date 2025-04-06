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
    "4CN2fsqr1ncUiMwjco86KcTYs3vK5n3TYY4mQdnD2m94MGRLQ8KQUbiuKB4xsHe7G2CJccVW3GuB1G2DEEsRFMZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdXWJegawPzpPLqaDPeyy5PxNwXJKAKFD9knTFvJNEBP8oMZbhb5VXWW6c8hJF3Af6sGAotzH5VfxcYFXw5xCsq",
  "key1": "4yERzh1b3r8jLDaUXXA3veaEcbxtrZGYrpVnNtdd5gt6gQ7xGk3gzeNJCuCabVrSbEAcceHpPqCrwUbM66y2AWb",
  "key2": "55q8YSdR7dG6DSGDAMWc8AwWJC7M1BhXtVctDsQw37NoPdDq967orAzpDzPDg1QM1SG8iYJSZ4Eq4ec2KUYU9QsD",
  "key3": "si83A8N4DaRtTV2qWgAnH8vWdYVWqVSouSFzewBCTNrk6v3mu2PFg1X38s5LjxZ78CuV1KZJfj6KRbahM2pYpfr",
  "key4": "4RWAjx2h6bp17WLiAg3ekc262FVBxeaKYeqfrFaspTY6xhnktYq31NPrh3cF2mcJyRMU3X29MLpwRs4YzStR71jS",
  "key5": "2Bm5qV347RaYN7PUozZgDocTRfiSzJZD7YDGLKQgLo6z4anx1pgcUAjpDJKbpRp43dDpNV3zWPSzrf46T6BKmB6R",
  "key6": "2giHTy8Gvirr1Qkf5XbuPaEu1jXBmWVD2g4NMJzCeccqHb5jD33RNhQS1xaDbkT1KajNSnXdJ1U22Tqn2CboxQqZ",
  "key7": "2dsrzdcYZbGf8Kdh9MKVJLw5m8Z64jEJM6nKsYSqNRiRveffsKpTcdCSxYSwZTh2Rc7X4PDxc4ycokV346PFUFAx",
  "key8": "4ZUPtQon758msQyQ9e6TUpygtzXFV3XJCh8yEQMSg4zhd8tPBD5VW6tzQpk2tcpJTT3TNsBiPK9SMcMfeqMhScm8",
  "key9": "4JV1f7yV2unuLZG2oPSYBPkmCgATLiARL49u333wsB9PyURwXvMhTn4K1iixpph3gAAAxBZL5o7sUGrjZVmia36e",
  "key10": "5PaDaQimfWq9NmocjQ4WLZuBCJuSgTwmciTCXuLYgjGY6mtVNokHj8VhPfxGjRKKpUQnJyeJcWvRZ79XKQPkW3Se",
  "key11": "2zZDvhRfb2U2CJj8vfqSp4TQjvSQf9ky3RtQnZN6uAipzWsg2kFL8etiaccLcPFbK2b9CNX9ZtVFJ69d1dRwL9X9",
  "key12": "4PHSs2i2rwqpGNZVGCzTGJ79o6kjoSUexspeUHjJLFY7beqt1932DRXhTXMEKfLDpSkv81LcqJqkM1jGV63U4Jfk",
  "key13": "4WjHH1v3LqQeDko8nW8jHqkggUwFLT3hLFeE4XvKG7iH9srcYEWN1NRKiWkTJ8sBELF1cz9TwXGWBn3uj6CjNAtJ",
  "key14": "3QABuaeM5w7eVSdN15Y6DGNAPK5Poc4vvCy74ivLRvRhafhHrEGFvHTYer8yq9nBqJo1RwxC2jznjrX6YtyTgJ36",
  "key15": "eFq6zcs9nMRS2BWCJ6wwroM9SDgcEzdkN1L232T8YreNY1si6dfvaXw42HHLNi3D6F3GXofvwt7PSybFqrkoYWv",
  "key16": "3tEavuPHSceikGfp29DRz5jN6JYyoouTDRCAYRpmsoMDSPB8og2Yt9tUPJmUCmEpbHyVAW4aaqtvb6uerF53fYW9",
  "key17": "z1kudyaAMSZ1U1mi27HysQ5KVWY3cYcUzJue3wfocg4STcUWXAwa1c15r55Rg9KuBbboCVfJhzvscQRKS5HVYLD",
  "key18": "4iX7b6ti7Aj9PucWYdxmw8ANN9WwxRq6KtyWxF69W4LaxcmRTmBguULiA7hJHVBH274EK3wzd4gTpzQ47A925eV7",
  "key19": "3m5keMEFZMkieiaQ76WEWYGkCxgwNfbKQ8NqmsiDsjoLqjgAtz8Qp4HfX3bFRfhSiRBL4XJJi7n8vc3ccpTo1mBu",
  "key20": "5dUFqRyHzFCuW6TAB8Pi1CppdUNYxW3YpNZ8M9XVscZztGgXu7ETTokecoMKTwj5fmnij5BC2Sus32FAgkYztrVJ",
  "key21": "5WfBDrywDhYBhER1wWzyeTr1HgcXb2uALuChZK1YBSUabUSnQc5pojVASewxqZCXEkWeFLxjKNDdaUqBkR59EigH",
  "key22": "5yHJULDKYHTW1VkmyPrtLnvDfT1VsYiK8dQgzeUD4fraAPcLRf6izUYvRziDWg6uYurWVnezAPw3VyyGmSpSzfdw",
  "key23": "3Mg57Bq6wCajJPj5cWg4TDb2wKUbW41XVGXbRFxDPtvwRzEyGre8eC9dMgXyqiosUJ14KafSzoz87WvQKVQ9tCZ8",
  "key24": "2YUejZxzA4m6HkYXwZThSdmbokLF48KFQFnYPZSTZJeLQUjmUSAKEAysw4v1DFmGNeApb6i2HfrTaGNC99xwTm2J",
  "key25": "3ETEBZpUR5vG4725o9CofWVJJVMgmts4wepGskT2u48juLfdGTQu6WsBfzpyxYhaoh39PW1hxwfrPGUGWdHKWSU6",
  "key26": "3yx2nN2xxrnbdUvcJet99KmzU5ytgMUnnjanCnvntxr5dDcsQuk4qWsWFqUMcYycqokVVBCy7WM6odWCWND29Ui8",
  "key27": "cps864DLsxjPDtR9ME4dafC8QCNAZtR9XzkHboK56V4esa2KNss8yoMCShtwsk9wfvTiGtb7cujHZFds8wrjgm8",
  "key28": "2LcFmLZ17EWYdDi18CXX58uDNRc2VyEpUVBdr8wYdnvcu7Tb8RYwszZ8jB6hpLa3ZtJHgdKM4aGtHgoKbacDppgA",
  "key29": "5hiUyAf569GwE9phN6hRY3nKo4972vkoFfnGn1CV2Q8phaDuqMsXAdCpVSE1nv3wBr35uKALAsagRMTsvSSQiYAL",
  "key30": "34bmr6y6Vd9QwvtgRDsQRAMPwTDSMV9dSjiQLm8qQh6MqQNs8h5oScp4ARL1Cs91ABpAms1iNUEsYeWn2pErFUsW",
  "key31": "4RRnryunxgj6oJocrcdeegTf2CAd3NWDV6ytPYXhTp3g7WF2LGuWU1BhrB3yfQapy2tahU669pcLTRHpGnBTLnvZ",
  "key32": "zy45h1WauTdAAXzYBPpUDASxbL3uqmNFb82CGnxtc7RfDfoLbEKyyzEjZ3iTNDHHQp3mZDxzCXi1sdWLCdCMm9E",
  "key33": "5kPKmQ2PMwsomcKkqssUBJisjwaXmm5wdCSzZDZw7CiGGX2oQUXhA2YfE4SsMs6eBSm8Fh4GbQuW6jShLXP9KiBn",
  "key34": "5cCRxMG7b9c8dPDf98b3zn75ETVNcudtJJz5fVoZoNss775WjjKef9ViQt65JpMoegLDWRNSuveBNQY9Wf6ikRev",
  "key35": "MeDmguvmFRfj6XWx6toi8Rw3uU7VcPH1Nrsa4iyvPCMNFWEQEJCmYFfqd6QpsSFwcBzYzVAzsZFCNT6NW5DjrHg",
  "key36": "3vaBsnWE9TFPNyUHm29YK6skcNZFik7pd7k4mGUg53Usur6gt7ZuTzDeLZNXBBX8LU5c8o9yBWmvaobUHtYmvq4D",
  "key37": "Y1u2bLeYjXNTR9GTLwneRjmPiEK8zFGzFEFsspXqC4awoCX6Nyh3qMr5JDK1G9EsrZTxVbWNQzj3yAxLkHTLg8b",
  "key38": "5eo37L8ZiH5fvK5EJ6FjAW4sdPaETt44VZ13AxSLxKY1f6GN1jFM9ysTeFYUBMbqhfLssXYTCUdC5mg81f3WDvmQ",
  "key39": "34axb5ZnxQTEP7G2e4cHZ4V7A5bBXTmoKrVha6t9fMSuTwcH1P2H849EPysd1MqToQnJ9McLDeN3tECYvALKhDSD",
  "key40": "3EtuPY91JJi7ew5GV5wSEgCFY4ZBRow9AiMErS66x3nUSK3SHJjb4YNhzLrhrfkDrS33HvAsRH5AC5gtm3gpcpcN",
  "key41": "3epFerXBnKbCKzpk8ipunFeWqBx1KV3vpZpATVcifgTtK5sc7KJCJ7GwGQ3qggF3mXLgCKRJVpPwEocpg4K69ya4",
  "key42": "3WamecRQWwp2QraEMe9ZwiQqGbpoBGXtGt2HkPw5Lznj3eLsJCE2wqGeup3FmfdPeujqQeKAa5Kb5exzfhnZzq6y",
  "key43": "4SQuf2NFkpgGRmTsUztoYn4ZD1wzdDQAyKSkhChmoozC7KSB2okwGgJiY7trvgA45hN2rvwJiGVF2rgLUxT2FBLM",
  "key44": "3YqWsLk1aLPXXYYFjFryNmC6rKFjBxaWzuUP5hhATVEViFY4sxfMcvvW5FJYUG2FnnwescdTK353M1b5dvST9DZe",
  "key45": "BCjPcMNS591QaQVH5o8pgKpanmxhVEwju9zYBhGH2943BakByezmgeDzPHpY3t6CNZr9zHdJMakjCGRH91d9kwA"
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
