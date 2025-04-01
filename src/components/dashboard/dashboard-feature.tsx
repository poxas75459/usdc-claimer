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
    "5NEbr87vVaP8XbZqj7QhXRFXAhrP4RARvha8P84p9BFkVAvLv9hJQux7tqxgPecjZj5DqkPTyqvBq8oArP5YiA6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46d5QmQ8HFXPACGScHH2Nueh8MwgmfFhsJykJBabTKDeXZTKYsUjekpDPo3nDefAckgpt8nFv53FZqsxoAkVLtuv",
  "key1": "4p4yG5fWrBmKW6Kj1a3gqNLrGpdXS3msrSyGhcdRHDnHMZXJ979R73ndEWgKundsoZuEm27RKzaU14PiFqNNhP3J",
  "key2": "5Tm4njKYArbmm4JCWc5SQh3oudHKr11EvsLhiDsUJm22utYhAtmKCJJnF5ggeN41zAuiSoMWMJubmMkTAXwWS2tU",
  "key3": "63JpdBrZrKQLguPPYYuXzhSvpJcFwqGSCUUA4QSNPN8RNZreZGWktL5QhDQieEF2omJyqwVTzfGuV9GuovXttsfn",
  "key4": "2XQ9jCRShi5W3dLKYic1WrUgGwMsYTeu4QEZfxrALtD3d6c99ENdFEbRisUDkG4estuQpMW2xGKaSdeCVnWZvw2Q",
  "key5": "5DCwdhcDmCtcY4BqvLjrnjNHweHJSB7nWetPx9WwcRFq6w9kEY2F9AbUE7bVKrQo5eSYKw4n79bMbRtEG5VkrGws",
  "key6": "5nbLAmLofp8Af91Dzhi4N88aPhEwB7Wv5fjSKay7NLaYcjb7hU1SeWkshNp5CZGHSJxBULuwprMqMwe3apg9jiab",
  "key7": "jNamgRqToEN1XqULhx4Lgor8Aq4GbB1zxpK2XhuzChJE2FE9soQTjgVXyXE425qKdsWsasTX3TBs7miuY5vxYkq",
  "key8": "3c14b7R9eZCbfXyWpwvybXcrLekLxsQQjTd9oze3BWhon82UUSRfpyS1N1CTRtuL983h6E53zT1fM42TjUv6D7uh",
  "key9": "31gfPBKpuXrPsuRTbc863ZH7Xqta44HUxhpoo3LPxUD4TxBU2HMj4khXPUUvZBj7gkhUUpZsqqwzP82yiyAFaEsQ",
  "key10": "2TpGCa49srB1wmiVHrePCSuMVEUtqxQVHPZ5zDCCeh74vACkZs37QQUkdwuZxaXD82xvjjtdcCEBPbRPVcaFtAWJ",
  "key11": "2sQecfegqbQQTQyyC1NtcH3UmeeYubD4k1zB3BA8fn7ZJByRjXJZWA3k6t7g8c3aAA9uY1ou5AvVYHZmD8Qhddjh",
  "key12": "5Ja7PqNScba3D95MaJZfGrGGKM3KvkDiaMX5A4ZiwA87EN4MnyqmkwcvaYVibyaJ1zoUcHwRCUg533cY8zam3XU",
  "key13": "5Ey9i54YQNJCF6ndKgLraCxDWYcePnkvpnsg3iw7Raj4jGgmjJGk3QCDB16toodb81CmNn9xJe7WBGkoBuzyqWSM",
  "key14": "4WvTsHCuVyvuRRLQcbSZ2ZLJzqxsJovShXdN4yrP6wECH4n3rUef632BEpZ1tibWvS74HdMaDE9vpc6hg9H7b2Pb",
  "key15": "2xGJjqCTDC52KWdEcWCsuY5gYgiajRufWSjNej7UubXtQuro5QKj3VyL9QjjpguiCAM55Ke3aBi1yH6Ua2Z4CDSA",
  "key16": "2oo7MZwvY6j4Jqj2skJPFMsj28jZ5ggmjd214wNQWNgemw3uksYHewX6DwuYcGg7ssnMrusCGHtW6YBzbc5PWhew",
  "key17": "7dvgBr1E9WLv9kfbAHMXTPgMk8nPHsAJLW29MUYBdca2cdG5XuF3p3Ju4ThbDqdmZfQBfSwbeRBGWZk2uVuz9eY",
  "key18": "2eegFSAN42MAnoF8vit82uvQKFGR8F1sAwgVCyJFpLCDmC3mBQuWz5qSuuTC7YuzrzqgZKZjHRd3WiVFLyiYk51t",
  "key19": "2jeHKqKfPAsXgc6e1m8nFhukRnmESCX7F2efFYgSneiq5c4hAwgsemwBMf9GPUzEnLDabWioXPTXerHdTYSDGek8",
  "key20": "3nBosbq73HUek3QzrQRwJBkqysLykJ9XrdJpr8YMK57NV7NmxMtg3N7UQ5a3NTfTRaagecroPCeP9c8rVLturixM",
  "key21": "3nGorh2BeGtaQ7Q3VNpEh6XJV17EGj2mmEn9sZgVMi8XirXF9Cj4aeCauL2fah7EWVQAjXX6CJbZMXYdVooJjNUm",
  "key22": "89nQCqnPQttwKBTKNpuiQax8jyyTxeTgi2ohWqSBkHNAWJz1wcbXRTA7MTqiP3t8ysoDp9b9adNEHfEfph4MQXd",
  "key23": "5yBkUG9FvhvpZ6BC4BRb9JvECDM1Y3WxDzCJKqMBQgYn64RNsaByvJvSrELvncFwQhvY2zKxqJcarjBffXxFdBVQ",
  "key24": "4mDL2dk6L4XJAqWWaexNvVUwndMEfxQiiaqjDSoYTBqgwTMxPvFfEW5egX3Bfvi8pvJ7BMxmo36VDgMtgiRTqedP",
  "key25": "mDBoK2JuJyrZC82J31HZ5JQo9pW1H8r8pmmX7VGKTM6BFnWx3R2xubVaY3H5GevRR4PYePD3xbi1qNR4M7JkbVd"
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
