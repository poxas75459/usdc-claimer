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
    "2mwNpEUUJ1ucWChttmF81Mo5W32gNS7CgbV6V962TLyKUSZwPDxATH6QWK5HWq7XBva2h7nJ6EUNbqtS6ihxwFim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrbLjGyioLegSrxPukDAwyNR4qGiri8ReLc2S1VzTYRKDGJ5EMUv1H8wQUQAWK3qdT6MHnbuYp3DNCL5KVKunae",
  "key1": "3zz86qVJrK1JnpYWn4jvcV4rhk9pGW7x6dR713KDzQHnipLP7zQihado4f1NBqLz7gfYVmdsuPtvsABcrhL2zDts",
  "key2": "2Bu2b1TFc4SujzeM5yX979xaxBrh5ZUDKVFQCm5iq7qUEPWsvNPqybCdZNCnM6rnQL6xGTMmWdJPMZ7XrdYKRm3c",
  "key3": "AmWZ4rZaMJyyGx7s4TvWDXdsnhM3UZgg2ZDDLH75psXihV84P4uDFi2owQH1czGTmmMn88n7cpLtGsuny7rBnHu",
  "key4": "3Wtd14aozk92qun4JzReTZmG3b9pv6Ut1JYFZ2JFq1smCN1nFn5w45ss1qcg9QASanq7QwyBHGmdzvc6yvzF1CAT",
  "key5": "JXSFhCsTKkAwkAqoUCkkh7dn5ArKfCFAiRdzz8HvyeBXXDQa1r4PTqxsAmZxzQo8c7LHjjxjkPMBPn8R4zD13pN",
  "key6": "iKwYi2p9ayBDG6R21RgVerfPAZwmaG6fy9vkZHPcTCgwtHCrFC2M95vmJRcHtAkscMoaZ9vzhLoGVuC35v7Ub7a",
  "key7": "4orm8vSNcsQnZZWTkXrZM2EDzJBvMrEpLbg9tU3A3WwGNnFy5CLuS4c4Eks4LYC6tNRvWZkdLVEfmiAiR4x9CZ7p",
  "key8": "HRBsLLQLcKQhqgd8ehdgNn8cVPMo8bYjqTAAdrkVjFy19zAmgyeR3ebms9ucBtZNGFzNK6pkZDDLAKhyRTDFc9r",
  "key9": "2yHxYmggP8CMPhb6o1tqdqbGonq7MF6JWLPCfhUYrGaNoUdFpes3d7eCJmZeZLwUSPcyCbXiHfVS5dh7qFVkmHMX",
  "key10": "4vvbY954RJh9YXZxPMSwqpo8WpALAdZgw3X9EDsvhVfucESJwdbPPBotXW8qeucKW2o8CZPr4jZiwUw9nv2DKpMt",
  "key11": "55SDyJVXpifCU57zJUfp8LPLM5cDoAGraWbqiEQUGzFEa5CwxmnVp475vrxMyrrs2S2KsYQjgGgKoRriNTosDy3o",
  "key12": "5PJAaDtnTCt8RLviQLkYwpW1tf71FEw7LHQtWwgU4fbCTVXPLFyBUiB2cueu7MynG4GfctfDy17BLSYpFfDqC2a9",
  "key13": "3nHLn1Xd15i7Q5NR49bXja4xA9QZXRwbBe2aYx5v79cSPsPj2nVPUBiFDq94foUhjaYW4us4kMG8zbTyBcJHyXUW",
  "key14": "3kWn3sktjtRxB59XCkCJTYoTnoUH6Hfr7ecDKSF1KSvZ7DUAa8iF9eygu2KdCBXtxyywFGeFMZUt1x2SU7Eifvbq",
  "key15": "3SzXhn7GcaNkiGNaHDZwHmqa7Lo1G8Pwqfj2jSBvVmx2MSoaqF4668HdbGfx4PnwM3cYwh7DN4L3ufhmzbonhegH",
  "key16": "4LAEJZaL3guzNaPd71Ldp4jH36duAyHSeEfGwHBrkhpsnphG8CZj3hB9ssSqyTbZ9RzneW7yQZtXdJti9QKRqfME",
  "key17": "qYhQJb377dgWZnhrutEaEG6h8C4gs28sv7yTz7xsPhkVCNnaRMd4RWtd67CdmKikM5uA7ERndB3WAPfHyXgcP33",
  "key18": "5WmEUpU8c3wVfnD9S8RHahqm6edUhMG6A7CPW99jG9WQMrJfP43QE4boPYhZzmEb7Xo7AG4Awxc5N9s6pp3enm4V",
  "key19": "3gmoXgSzcbsGoMhHYVEztTFXcPLVTg6CtGrBidr3N7EnyZmWRzNd4zuyhwg5Bbqa6czEB3jHTheCQpGjbnJGsMFJ",
  "key20": "53VSUKtCQVEUMUqbtaXW55dWuQLSB9hTFsSgV9yz4h6LxavXNajxVoE5RaHsNeaEFHv217m61d93netfRNrs5ERh",
  "key21": "vrt5BR9Uo6kVHFZnkQ2tSoxNFrU4HofWyKiCFcrxD5q3m2y3R1v5C4bnp2CyDJTJyWhG7oMhQk58E78CcSgWC9R",
  "key22": "4NmtF8mmmcCoTR6jmvuNoSPFycgnDiyq2yxTP2LcBkmAhB69xV9coU7pswtD7cDMiT3cRL8xxmUG5EX9DV3LDhr6",
  "key23": "2AWiZwJcnWrsZUBbrZjAu4VXYxCvJz48aEaGCCvmSY7qg2eXJ9jdHNehivmLYod7PHSJQvQPEYaKYAndvQTfYkNv",
  "key24": "3Eebsp7Q7xocGELiaZKjb1ujRXyNQZyBwXpcc3RNGVJJnQwAUggpxFJM9tnJq495rXzu7rpNjxZ3uXZTL7HDRSXV",
  "key25": "qSmddWvdawTu2MeRSpeZBLrZyMuxfY7jHQTwbJGmF84wuQyqw8oL9AhTwcpNc2eeCecgJhrAD6fNqCCoyUpfMzr",
  "key26": "23QETyUJ3tXTVEodUxwcpCtZzr2Kq7wB3vGEjWmV76qXbjjck1oxUs3pD3j6TnSXmXRveEPYUXycm8jV4irByWyX",
  "key27": "29VCnjYfEE4Mawfrp1Vx7fhGa1iN2hnQDhCB1nhSSLJ5iaSfGWdARufixkzhBV8rBX7CsUuLYhMZRbtsTERheyst",
  "key28": "2aHMJmo3DT28DAfThBEYX381x9txc6wEL3bLMFVkMdprviCUaWHnnZ46EpRCEar49hHuTWVc6VczXBGQCs68aXS5",
  "key29": "e4fcoF82Nd6Gr1MLqK571qEKuTGkj8oAKyoDSCic1SXi5UeLiVpkUuPF7Pa174ewp2fnXexHJcKceJCpLThUpsK",
  "key30": "3SaKi5YkqHPEvW27smZGNXZcXW8zUY3xdy6CUMAi65p5wNNC3dbwhXznDxWjm9raHqy6TPm1QpRDuZ1PDDqLW3sU"
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
