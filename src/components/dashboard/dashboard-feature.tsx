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
    "iaFF8FXG7fNMHJXvxvVru3oYmGzGQ3rWXiKQuxbvSGPjn61PtoQ6REDHjPP4BgSBGWseWxvRLtB5MuQx1dmtF32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQ9Lp9pXYCZcp1g4rLzEGh7uEug2uiey9uCyNRyvrE6XHMqmyQ4ivJhbKZNozAcoaXysKxSCgRDWZnaK3h4qiKo",
  "key1": "2Y6whsRBpCMVSCpwMCp5pmNCm454z9ptpbdQtievFWvjV7qNrsXJykqnwxK3vBQuwhphZVDQULVJ7BVSm9o7c1zU",
  "key2": "4oKMSiRQya2tuGGUHA8kWWo96TbrHx4B4KCqTsEBWZMZVP9H1ubW8BLemELaBm4J1MEgFCTjhKAdxEAp2nZyF5re",
  "key3": "466MXwpjnoJx9pvuRAgL6MLB9dThN5CBpxc8nn8BxbHNsMkWy3sDN4CjdefRpdzh4B8i7HUpArwHj1YobeSmrZaL",
  "key4": "geT74aHNzRNtLTGMR4haozoff6NP4dpSR8vJaiLxLQ9YBVsKhBoQGfZ2jUeyxxKCgcru8UWdhGUgULpo9UkiDNF",
  "key5": "3kiKjJGQDcwJfG9PyFscybEyCPXs4Sc8nqZjzESzDvVe2f7qKa3hquLBo6MTX2fgmWb7depzzG77W8jppEtijrZX",
  "key6": "HeYMdw3NCVvzwTpuhzPvkzDHFDq8S14Y6fvHb9ja3c5dL3B7S2AEDwLeqwLXtiaEZ8hesCmEsLoJnj1b8AmN198",
  "key7": "3Lzb9JrmitD5AndxWPBiaeKYrw7DP3kCAbnMNjqeceYM5qq9xvnC6CqGKa6NBjAhkpqbjsiXNJ39AE3fbkcLGq5T",
  "key8": "4i7sXauiAE4iNxT2mqFvXSnMHJwLXHMvirDV8mpbhq4c52Koc5cA4b7Rbta3yS7hNhZeQduUGi3tZ3me2KbmUbWY",
  "key9": "Wqjk1y311WCZvBJRZayVToNG87CfVisz9sGdCuvmExezp5YFRixcwkXTPA1nsgouptjoLWyrrLmWhkVKbVw2Jgq",
  "key10": "2eprpijwaf3Fr4vsP2mPNWKb2GzgfHNexSybo3pqUuMdxjZY1UD3uTSTkeRUg5NMB5PsZHzL4g3U89bvV5SLJpwr",
  "key11": "2R5EDZUyWYKo9hVZrNxP7UL2ms3hfeAAK1P4tixgcvU5AMT8N2tvi89aJMkaCoQQ3qezAEV3NSRT35R1Me2ABiun",
  "key12": "5VASTFUDmLZiqirVpLgxYnTGCfTLPt8jNUnJaocqwaTb2aAYi27zHjrWTmmFQF2bgevPPGDmNCYpQoSExeWTjKUv",
  "key13": "2tzgUf4bVDTgiW7h8e2TwzJbaPzSX4DeCKLEbdTPtXdtB3t62M2dohkjRmT5sStMQiGsQpTE6yeJChAWsZ4sk3cK",
  "key14": "5neeAdcneNEYoRdVVWevk6FYfHupyjRGKvF9CcP8BZroSMCYFTxTuVVnsCGwD5Q2wfV7VbdYprCLSvk4yCE7XiNq",
  "key15": "21gH2E8GKDLDYqZz6VTkXXAudk6cGd9PoapcV2THnazKTq6rMvLXZohjPyViKgXVSfNMAzB7kEJ9ZKSpWYDJAT4V",
  "key16": "5yhzZ4CrufTmtpSLejdLDKrYdCEAFqvnpgH1SSi2MactuKBm2NxUDkDJXCw42pnQK8eCDVuRaTfmhtmAfGDD12b8",
  "key17": "DGaqSztoDkmGtiXjXy25UKh9PyLxHzqpwci5P2HogrCyhWvJTA6rwrAUj17u7csstPHDikSTk6ZBF2WvqZNk4JX",
  "key18": "5d62m1WK73DWpr4rMoB7h4xVeTK3vuPgREgXNaTo5oNGJzm1g1t4joKx2aQuc7Tbqpf6zxY5fmxmvyPzcmPXDvPe",
  "key19": "3k4XBGCNptbYqoiEmy9z3fGjmkDtqsVhMjADVzbRbw2Q6rx3DEHQiBSY8q9ZxDQkt5qKdmWagL3AcTgQC3Q5K4MN",
  "key20": "4YRNsK53JyfPm53kgysiHa2xsbnEKg8f7zj1TDqmvvifKm198J6ZTSWzHBFhsftitUoTQU75GxiiymZcwDX5k8b5",
  "key21": "4iEzX33MKdFzW9omzF5fkzipWAELFKqSNrhUycFVqGg4E26Htm7zmouRkjrq8JChgdZQYkMBXPXwd59W3mb3Q6Ws",
  "key22": "3MoLWsureaEgrxSCetvhMkSu3zynrHmcfJ8XUJ2Xi3P8BNB96f83WhxscGDYaKpypbCkRqxmhVbLqzXXTrT8wG1",
  "key23": "eS4LAonzNHKQGthVBET8UVRxpQmTY81iUohjaPBKKEZ6Kx1U19rbyVSk8LPYApKkA6DSgpd7G6STspk5pXQodKy",
  "key24": "4knCKqmpDgUu7P8M7Pr4acSKMMGTdXtLPkRt5FT6b2Lj4M9DzW4EESFtpWUzdSUUn93HcjobUokuHpf3a5Ly3QAX",
  "key25": "5evkhXXAhgrnecnYzc1xE2LiLeC3zpyahcnUSXm8ao23E2SvWDHUjiMP6zjfRgQxobRMBymF11vGJ5ojNF4cUevN",
  "key26": "SCVhD2KuVaqnYgFQePzx5ksF96uKUXcFs7DVRJryp6YL4gU8SBAKiYHrXuAuGuGS15NbSPrcV5Dcaw7nfV9bDMy",
  "key27": "3E6GgxYRo8ev84axwQMJAtcAxx4Hgjh3PGWxf1cK9GS9gJaj5aNJtURMPdNL3rWJBAHvuiATStxpcWN9sds7eZKg",
  "key28": "3Jeah5DwdD5pRcgoB1dJcrwRHnLTSYCKkRRA2XnByXw5GFmD5JLqmMcuURKd75mzEWyqEmA3xpZ96hS2qJrpj6ef",
  "key29": "SKEWwB4KmDcsqzoyfmwt3nzgjETXKSbEqkUwCB2gvmWb5dFd32ri9LM1HRc7mbDyf8Q85gdYZWZMHEsRoE7qogr",
  "key30": "4JP8BPTRx3P7jdpYnfA5YzhB33HgLhZtmJc6xovcnRPKi6Hps7v6DnD1rpXLRbsfrUoZT2RX5twe7JEjBn7n5j9m",
  "key31": "h4YdHaRxvTvG7S4eUq9d2dUWg5eGmXjk7y63PpbcHYKHM6mzCm9pk1LNGut4J6m8oSttHjs5b8m4pVp4F7coTcq",
  "key32": "35TvZXrJ5ovsWd12UEEZnYrZEHGAqdene2Ays9Ai9SWUHhJkyqQPQfhgjZdraXuY6ETfoGWvAW7aWBwmvRvcLj6j",
  "key33": "5NQuA4vcv1w2dmQVeXiWNo7j4Ko65tRiAUrj84BBvaxdY1FatEvZEX6X3kNwhB3foHTVoZYHn1dj2rwMnCvc1xFB",
  "key34": "2XHtbH2CwjsBLT8kiCGn2nrni8JezjUo942QoCRNpkNT1DVYzmHaLbGat2qV4SuNoC8a5PLAPkynR3nsVi7Jy2xj",
  "key35": "oxididFjHjYhxghpxP7FLG3xiMuvojm2V6ADujAwaggLVaN6v3HEjkq6mT5vf94QcePpArCZJb9tq1K4JzLXvDp",
  "key36": "4p2sNfbMwjdiUzKfWrbgp1vMudDc3goAfzTjzvHC4mreUEsGYLFwvWQQKrAVqLu4YszthL5QAbaWzRXAaAyrcD5R",
  "key37": "PkJNXMLzmLzNyiNQXaHhzr2EdYoZ1CZuzfsa38JvqQj2pEejQNVySUZ9wPDh7BHmPhc2nKgC6ZUFHgR3d5tQ2Bv",
  "key38": "mNEY162XgFw4oLWVWDjxXYbwPaJBFDe5KPskb6mRE9XBs1fKUd1quyeeYENo4VFQUxYazyXwmVrGtwYkQMPSKvk",
  "key39": "2oCpxgGGQrZoQC89hJzAgEYYsXS2UcN6m7JRMyaGzVWHK8w3SM1gTEq6n6PhjBNW6DnZ11HpL6Cqc1C9cVKqsnaG",
  "key40": "3nboWiwKoEaQxjGQXtz1bWRgqg5QCEKX79CdCSah9FhFLPeTfZ3HteRVkfmjTC8LRQt96qgcEMoukiLvFBDUU57M",
  "key41": "EwrbfybjUAgDFte1ctNPwrkVQRq6p83HDn1uF6JwBc5KcMsdn3TuzFPUJjCjaPLNC3GRy24hhRwEhdue7hXfxmU",
  "key42": "eZoPLkHzGk3VkUccUessf78sQ7DKLjx15x5a5m77p7YSoHbWKiJwLY2dgNWyExaoFF4DnP6uXZcDkhKxxZk6dXf",
  "key43": "5RuCakGXKCwBcxcVikssxnH5Tqgmezp2VWst5g7PE2UWT8xcgknNqadmxadPtCqZKMfyq5VaFQKByj573RzWvPaP"
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
