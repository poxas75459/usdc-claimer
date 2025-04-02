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
    "2HgwFGcsxtrvJTrB2fnyAv5vj2k5iwFnsBMnHLDdgTq8MNhhwMFZvMSNvhYnPqf5A56iAkdpNCjrg6QLZjeDQ9SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62yzVY7Csr2GtLSTggYuVgsqf9TgwZwzSYcK181DYnbEvnNe6hg8QKagzpZefUxSPWiN8FKePx7PvcPXWLLqhhVs",
  "key1": "3Vp9ktaGEhtX3KqNXvZPdBCR5MoKBp9oJUEjiuF8xTn1SQrhDYS1shBVWRvgMA6AawVWpmyxqbAedppRaim6m2M9",
  "key2": "4yH2PbUKzoUhT4CHQfyQfBFJSmU9oRM9vtLJFDcrWb21zDvbw8TvwoBH7Qevx5A4qtDpwP9x7ziMwXjGN8eZSg4g",
  "key3": "5AbvDBZKmEFWzNAkw8eXq6yQRiQeDRUoT4maLL38hKUgee7JxnWz3nLz1T7KkgRTNzN8wts5LRepMD8TBBLLBaHo",
  "key4": "7bEhvCARRWyo3UZMt9WGeBPik98rdLP2HhDpNWS9rEiKcmjRTcCXJ9uqCt3sFbBLLgxs9groBLpakGS9NkYHTTz",
  "key5": "2T3Gm3v4dkgSnq6g9HVitWAN9YKZR45Fhk5S2eQumb126XNsKmS4SJ4hamoYdmr3BsEZVB97P9skFDFzy7kzdKyk",
  "key6": "4Fv7EYu2HrTUcm8nuk1cf6RNURym9B8CN9xS2N2wqRpntjLeVHpirc8HFQHcGYcRU6WSSXjvf3iUpWhkL7BNV8rn",
  "key7": "6givAneXtdeSx3aQymuTfpGZrYZRy52HFdUN849JRk28gccLQcrgnXuUUy9oqbpvcZKecpehq4nxknGw1sHLCxN",
  "key8": "mM1j28ikTgawm2nxR1hvH8rnujukHzpgSxhYG8GXTnt1EWhKAiUiV9RSUwyCFA3Q1FCHsHxR4g8McxGPaXdSQN5",
  "key9": "ep83CdwqgtZPX9eodWWWdjRRD2f6byje64LiJhy43iXfCTTCN9yc6qv46eYxbWwuZ73JGRVKfD1wsMWJgHnWeMr",
  "key10": "2JVLatpPn54E9F9HgAzLrvXyUCdB9t38eDjJYGfCYgxzXz2812GnJpNArUPkZRs5JrpL1ew6JX5vCjvtH3mhx4os",
  "key11": "57Fsuq5u8o8i8CkwoCSqpjXAXwwfRPTiWWWkhnA1rrLpKNUn2VwDAHbi1DaZmuyic1gTmHJb4ZfZmf7Ns2kkjFJR",
  "key12": "3MotHHAbBxsJ4PmLWLe2MiPZHtDvYjs74SZLz4fZUwdN9kVmaQiZ38xBywctP1FkTZ3zSQgVSijySziJBrJ4Qs4U",
  "key13": "4MWdtnRfcyHCwi93LfR5Fw6A2DZ3zrPviMb581yU4FL1LTqRCKWHFVPQhQ661YQVSLbCTENDL2bAQQQoJKb4W7x7",
  "key14": "3kneuPm8GNFxBYnZu6ioVfPrzpUEE95m3L51D8xozoyiTzsTUAWgd8kPqtVMqtHqazrrz4a5Len2s9rWhLPCXJMn",
  "key15": "4Bq1fUCLcDboZ1Ly1Xh2rpuvPH7vjQYLGJHeFTYjXj2ifhe5qvVn3J1H8axdTAf1GJBTFtxkjxRQ8MumiXLDEdKC",
  "key16": "4HecupjLzQTyDF5hAg7RgrBwghuzViQYD32Cf8NNFdV3QkhDGnWMMkg4ApGSU3wByKfF6P3PjNVha1dzVQBakbrg",
  "key17": "U6itFso2X5q9jP56dnxY3TgMmPqGXKsoXP2J9PVQAHaoiKdNvviLMZ5J9s9wFYhgseHcEqAqQCEqmEQv2BMBho3",
  "key18": "5QaXUDGa459ubsBF42geF72uA6G2WMW6ejywJYzRzYMaBLwScuHkEY5b1S6yuhBDPq8kuLFxCK3a72SJiR2hea5p",
  "key19": "3EdpRC6qrvh98N8Gp74DH55ggH5CurayRJmoXwp2DE8NVqxmKncrLhiZtHLbjMDKR2mUbNEPmZGtWZZRbAn1YyPv",
  "key20": "3fiwirY9R2akBKFac4GrotcS9emoTCzz1sZMCatrNvaLMEqkwCNoZKAvK6M4D7j1s33X57dhRxW9mZ4QA1D42VBw",
  "key21": "9DHCK5ibyX8ucy77sdqupFvQzU5aG2LMcsTC9HXpC9PAdxNQBxGojZj73LTnui81jLaq2VdTYESNvLEhHMyqjUF",
  "key22": "2dzr1kxGVnBLBvny9HG3m8XE9vaudN3fSbLRCpfUnSdza9mjzBiEZ6nYSkAkp63B2iYGRUz72N3jWoB5QnpwfxG",
  "key23": "53DVHpcWn2K6CDxD7X4acChbzuLgjiotYHtZDF4gURXfAQDSxXpkJSPycQUjj8udPPVacCxaBLNmDwWD7QxDLBSh",
  "key24": "4YVZErAfagZyXcWKb9WDyaps8svoY8ThkiXeRntpMxqcH1HAudXaTxcyp2Wcs6ZvUopQtVJueCyJFCLxaxcGPo3M",
  "key25": "5QeZqLcGZzWYvoq893rhdUGqBCxWUT8d1YHGCVYsfsdZ2dxeczpTdegVip3mGSt6LfMdh3MasAFRow3zKNAHx855",
  "key26": "2aKkHJAcu7PjkfvP2mMNNFDJiWV3R68ztWDKuTvs8xgqLfVg4YHWLdDc9wS6vQnC2U6PxUcgx2Q8YH2S5fCZGDRF",
  "key27": "5bz1SgZWszMtLF3y7jMqaDNEYLeULXJRP8hFGRmXoxbnPMKnFxH7yJsDnUkgJnicagxDf4SgfSGzxLwEGAgpADX",
  "key28": "QecZPNMzGsiaGsX5Fz4WmFxPddqUYegJN7LwUfxZp3ecSCDEieg9CTbr6hnbwBe7VTtRTxGXrL6Twdt6pQswtiK",
  "key29": "v9XUrnNEFYarTgSYtYmEk4aqsivdMDM4k1Q1b5ad2wLGz3QxNXATFS26HmmkZ64GJJtnfU47EPfcS4n3Gi8Tpyh",
  "key30": "4rPDfZjq6aXo5tu6esBrhnLXDQiXzPPMhdQWK6wrvXHdQf4i7xmvJQ33GxX22ohWpu6R499qpUi7LzPhjFGERRF",
  "key31": "3L1LzqWG3q8VZTLcKjCsENbQ4k5imTBhcuxEzopCXzDYGqKJZA8XzPKSBP1xmoLTSdb9qTa7E9mHx9RdnxP9fdyd",
  "key32": "3RAwJitGGLAhyZ8AEtTZsyDrLehxu9rgmbRT1PghRhf34kXGWcKrojUgVe34Sxg1ASuYcNDdfM5nbp8XqR53FpKp",
  "key33": "4y89LcRofseYiFBGtRUScyM83s5YzRwhpwVTm8XPo3t3pNDrtX9ymutekcPWevYfrVKvXiyqZWW9rq7mojnVi1kh"
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
