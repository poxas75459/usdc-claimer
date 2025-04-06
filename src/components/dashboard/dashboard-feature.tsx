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
    "3XPExGpDduGQ8qEXCRPnxuamnhSWVdGDpEMPDD4B5A9mAsFeob5HhpPjVJKfuU8g2uoj4LkJPjjeaU52ea1ztPUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EthJWJDpyCyF4iuQfHvBjYCDKyZ6WUxnowqo7d5wbd2GEWcXn3dfHSLasD4arrVUFHU7vsxkgTPDQzqWNZEAtf",
  "key1": "5eMvwNpp9M6Ga3gnJpR6gaC4e1YHE843J9oJ5UVgstyhWPPqK1CS9ohBGZfpYMbMHfRXGn8gdcJVE62CxY5nyPFp",
  "key2": "5gcZmpcubJ3s7XFEqd7gLPMHGMLUHKn8idHucToGjpEX3KfdapK9Q1rKNqULH1nGfYe729XygNVMNcUFzZYfWFGM",
  "key3": "4J49vbbqjS9SCbPgC6qqBfPcPMGNEjQsHQ3F4qYMu1jr3w9jqpFYpb9biRx5k1hTNUsarCdhE4JiSdbqxPF2GPKC",
  "key4": "5yF8KcgBFtgGb931MBZfaJnPvgLFXXcTL4SWwmtaaaRgk8xWCTqtB5stTvA46duT5mmDy1rkvrJ4srTU3ATm74DW",
  "key5": "4h3j6LshjTqb4WRoMHMFSAR2FUiNhK3B3pHvSzWRG2GMDra5rikRK7ayrFGToywfX2gGiUz6VPRy2iFU2k2GtmpW",
  "key6": "5cskcarjC5KrA3SY6NSTLnQKrJm5KM25nLicn5A9VGzh6oGHmav5b9uBYD1gwMSqLy2YrDq16v2Ud4v3sccx4wA7",
  "key7": "4zV7hvAXRZhzKXgv391XchxnPcJazzM3sTUqCN8cW7xm4RMiZzNZ4KM3iGPmqzq5aQAmuavdzQsmP9GpMu78Q7Mu",
  "key8": "3LJHPskwqQQr8Lr3xeqD3VQW3cuU763yY94XuX62zMw7VZLUCiv6C2EEns3YqYvFprb64wQM7mJ45isP4t6g3Ltt",
  "key9": "2fQbQhM5wAeaxetWtbTLyDfdEQAwyMCSFetnNhwQXQqmsxG7acjSHa6oUQwgU3mi4kaYGx7b7bgMidCbTFc6SVXK",
  "key10": "2Kt1TePHbD3QpNKgs8qjLQVeYnVxte9oHfqtyKWucuvwHSvZnuidy9oUfiX1oCYauNz56RPt3yEfBiFodM13VMa4",
  "key11": "3eBaLbjaJgNn7MPEGxSJLt5kqMRes4niAh3huT6cKhVxYerg9yT7ijev81taTnvMqqk1FeSMbnZ7nXWEhLQ7Lsmu",
  "key12": "5CoFqGCpqnBZqvr5wCbD65Zvt7scySHWjJdfxCsyA6nokVfrTD81nXtjqwWkfkd4KE9aKxWcEQhDfsdtcKYtJ6ma",
  "key13": "3Tv1Ch4XgiL3C4WoR5YzULWLX86k5EPmZiY9XBoZxSoWFQtX581gqz4uNzsNUqxMYyAPbL2gRucdmJCDbisFBN26",
  "key14": "4SN9aRziEmDDvAMbp7ztzozqxj2hkdqvDAZN3J2CDfqroWMDZAA8Wt11H2gPBr8Mx6pwBWXc4SCiGbReMgSgC5o",
  "key15": "3R8QhPhT8hJ4au44XCmNNgMDQUcKzPzhLoKNoPNvqzVv7LNiYbVMnpC8QaodSZ3cvHQj5JUtPLsiVRovM3V9cKuy",
  "key16": "vkgcwmskz3V7bihqkikk7xEcT8bcUWhAuiPEqA9ZYS1C8VM1aWGf2f6eTe45JsDjRujofEb1ZerZvVTTMT8gqu3",
  "key17": "3BLxpCMZcUUuSaXacm2ZpPUndp65DpmYchyWgsDSBPrh7jfLsCHgECYyARX1q1cZwRgSHVPVAxEXFfFEVqDPyoMb",
  "key18": "5qWPpPSgZXrErgH2so7ZCBwTx5cyDbW4bG2HroCY5SdHkkD7LhaS2tRm3VfkHvo8QaQ4G34tguKZtX5xZ9kG558X",
  "key19": "2Nm5sG6qXwSaMyu2owWzrXfLxK4KTHPEmXq2SAigjHZ3QCY2sUmmxiaXkRotmnWdRZRRNhpq3KYCegfhS4YgCLvY",
  "key20": "2Vzr6LsXtDFBcct6NA4t6RbFsCe4fwnBzkCoVLTaTFdpWBykkWdnQnchmHB1jA8RcrCzEWPZ7MUDryX4iF22Q42k",
  "key21": "63KZ47fNUWk2U1ocD3Fq5d9nYvBaPnnccCUkkzZJoa4Mpi1VgA8yJ5KXkXp1KD8fun8Z7rQR4P713Zj88Lf6feFf",
  "key22": "BFPFeUqKDsvfgBmnL9bNnB7NeSFt5s6xPuWd218mWAPjBWP5eqbw6ECZFGaq2jLkViXwTXnqTENiqhS1zuXTS68",
  "key23": "5p5BZypV6utMhVwfrQP5k55wx4CypH4ngQvmnXeY3vTVnSoiFtPSrpZddLmUrFVSPJr1RyD7L9xZZUjstAk6wpYT",
  "key24": "32MYK6C73uUxSmhXhgnDQidtUqKt8oADiNQsHi4mdpAjskZjkZ65Mmer7MwqW2a6MSXR8LqQZw1xuvv5m9yeB2uN",
  "key25": "3W3kmwC3wpG9K15R6sbWiZtztz5s18smG3h7KitFBDELGHu2ek8XuBHucp5axPfZqwDuN4eny4Cnc2QJNPynC1u5",
  "key26": "3A4sCT7B8u1XBFidLU3BiV2dNrbHan1PZDtJ73ioaUicSaA3QAQdciHMQSdj8DZru3xSNTCehJAzz3bWQUheyXNt",
  "key27": "3K1raPsoin2u5fSP5MWZK9NSrfd1C7Hr2WYRXztxN7iUUhaRn79VsXXHvyR1j53GcnoaWjCthHDtxD3hjUnujjYv",
  "key28": "5hH9peAA3QSVkjErdgpoJEJ6zdN6khT7WYivhZV27NfwbcTD9TkerBQWEUfKbkbBorngbx8irrYZwX7rHn6rFp3Z",
  "key29": "2LiqK4oQd3KjPfv1dyvCNLBYbjTw5bYAoH1RQwQTe7A93h7hZWraA4kNg33rSzC4MrePpVsw41M12iJoVJRDfsYk",
  "key30": "8HsBnRhimwjucJrUoNJ8rvGFgAZpKimhf1zcHiNWTsjei1vqXXGXs9ptgb3C5dHUaC1HQF1pU6eYb9my8guDtH6",
  "key31": "23R9yoiyNKZW3TrRctrkTw4JWNb2ufAr9y8MBFkxVrAtr6DCshwxTGgkN5MxVstEnQRpFSd2826fgswUCRgzSCQB",
  "key32": "3KomETsGFRhwGbxmHrz9jxsstAj5AbPS86N3ihjXVohMrUimBSbs7RxxWbiQ4E9d5v1SNPyY5SL9YFKAQqVfg9jo",
  "key33": "QReXCkoh21vVtBPswunTZym3dNs9CvvjVDYy8vUzFFjE2tjrh5utW7h2FL6jAwePiP1R1UFjArGoNULFAQrhTf2",
  "key34": "5n4YxAPRiidNu9VPkBFC2GjNYptTdJLqjyE2beBvbtLe7TPDt7iWFQ2gRN5wv9fML5A4QBTiSgHwd5MBb2ihgbuC",
  "key35": "3PGMhJrm6PMVjuzsrmCCX2SzzQiJCkFXYR2aWTzu4UrT8RfbiXcjeQNUHnUB2jkZGviiSxq6mjimCjYMXm1NxtsA",
  "key36": "2V3XQbnviVasAzd1vBDmpkxcdW6bxqVJKy3xzuyaxJpQ8pERUNytiMefrpES9NRcmoN4YHYbNbNYEC4FiFqzBhke",
  "key37": "5jH8ucnhPkr87YzCXRB4FM6KBSHddcVUnYUtkJmdfkCRusj5pxAPLTJPwuNXbrxQbUFESXbpyTzTGstupuZqsWe7"
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
