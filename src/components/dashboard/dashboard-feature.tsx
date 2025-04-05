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
    "2L2BfsZDVBexjqQ8RoTYoHRbP3pX3niG9BbjVWrM1QW3jkfeXYHwQWmLatsqbXPPPzid9BBTPW7EARtr7xc3vt7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QB2pVf7u64bR48ehoPbdqU2ZitBwAkNzfE19yLzDBsXjFLqgpHFBwh24GaTBAagyH2f6WuUhwopXyTMHFy2gpiS",
  "key1": "4GJGXzSsfpoFjH4U84v5YikPY25zvEvAHUPQ8WA57XwYvEPxEbLwcLSzeCwVuZp9nPGJNXrnbazBYPVGjxmKVMQd",
  "key2": "3hALVzd1c62RaJEZrxZWBhqWU7x9igDXiT7e7APYVp9hfJyegb4Fde5J31aKTdgFpnx3NhzLXTrBcvYVnfGEhFup",
  "key3": "2c8WLo2NVfthJpLszXrVnUVHqMD5BUHXx1bTb8L5ZSFzWKPPSTxtY82BuYbCxwJNskFnGkLj3N9PoWWa4wf8pCSw",
  "key4": "sUobvkjKLSes8AwDZJo4185MmZ1i1JDCtQppmaJGyEpjPiVJNxdaqf8QceJNytRL6PtvMda8ZEME4cuQrHv4aem",
  "key5": "5rZ7UPWiygw8hsnoVoYtWxLV3iPk833MtPPn4EUXGYkf4t7mPnVKjE5q2VQSXFHjC6XuSHPhphPcm2REn5xV21JJ",
  "key6": "3vSofDn1PwDMojDEmjbwz1jRtFAojszGgWXnsDWsHT17dxWpxwmWieAnsHRNaeyk7K7QrnaPDrkWzteqRgATPRYB",
  "key7": "3aQZwtuKDeY8GWFSiZsPvYJTU4Vuqb2qw61DwCkZ3XWWgzRSsKuewCWAg5vVhdS1Phykp6T1n2CNmg2HB1Wf7iC7",
  "key8": "A8P2wnciapEgN1HMxTW5bYbWzbUTm4E1MhnTCLdjuDmm2q6nS15CvinHEyDoPjYgWPMU8TAhNkRtdA8nmMnXjFr",
  "key9": "4ELF8wCj6CGU9KTvdzqQAMimS3yLHcvCPt6arGN55XnPsKNLirzc6Jzn2mLYtwvQZXNrww39L3hCHPQ1GWGiaEAs",
  "key10": "4odvFjUvTVYCBi3SMuN4ssqTkNzcKmwptfMDMtkRyMf1WvAsq7ZHaQp2BKFRDmmPqxfMYEgtHWAAsbDs9mL8mGnp",
  "key11": "ALWcgk53iCLSC1yDg8zkB4tURoqjjxYWhLtd6PbLAgc5geY2y7XNxwhHDiPhoYyhirnPMeQ8BtLqqK9H9wYsT5K",
  "key12": "4NKZcsEhr5cjq5fGy3a5h7Emkzf5wAWuFg9PNRWX5dUerHtvRx45d8R6oV3MM2C643Gkn5dn5oL6Wq6nvLWhqw7v",
  "key13": "4kb6xh9fKCyCxr9NPQX8YGbbcwY9nxnHGDiUXPzpwjXjPfiwYSLQymGpCHzxWCSbSozhxw4oB3Aizw8EVTgKJxv4",
  "key14": "3suFy9LSpmW5smuFdzEfH3exTSxstLGV2X6yedDrS1E3skE7nswXeM1iLpUxKzN888EdqToV27L7XB2uS3vaUzp2",
  "key15": "5S7BVrxnQNFK8m91oc3C5HjCecohh39W9Se6iDcaxGCFYdwsxkr8JKP2n2nxTXjwrY2HArNLdukKmPiGeUU9dpK6",
  "key16": "5WsQoAPC2YVDXxRZZR4a5DYrayzkEQhf1EHv4HHa5zQvjmBJNwbS1SY3iPmQnJLt7R3fDpUdBCUUcsVoGQVV5Ecx",
  "key17": "4XxKkeNdagvfxu8SBbyTjEDBxRpm8ZHka3QgoniAnxWDrLpVSK3xjdrag2iJ4xi1ZCkvjfmSDshePRgfDmyRn1Yh",
  "key18": "2iPPV23K1yoMQjxmAzSXpMTWeGXc1PVjWJKHrEa1A9bLNYafCjfHkDzV8xdQhKdfH57PAwCN7dfmoaoUbeKXVxNc",
  "key19": "4a1egvWhSQEcwpismadiejJyCtPTC5orWastmDUVPknNrrZimFypFzhPUuwBMQU9JXmTFsSUMdL7ENwqVd3cPA4a",
  "key20": "5uUT4nNDUFPpcuyaPrNYPJe92FWB2edRp4Xcr4cS1roDpmVnAE77HSSMP1v8Wd7jGFFDSCNY3TsZZWhJrbgFhPob",
  "key21": "3adV4FWCZ59EiVDDwM9Cnko4CkedVzSM1WLmhhhjVyxPJ4bYnjuzpdNeikbNHCRMxLbyU5J4biCKkk8thjZoYmK",
  "key22": "2chmopovTFHc4eMz5wb8oxo7aFqBpxn7LqisZopJZDyrbfkAnZJu7ZbbM2ytnVQWpg6yFBjzfJhkpvBn98syhqBk",
  "key23": "GrnYoaijNt289aBLS5jdRUErggsvnK7b353PchNbSFRnpk26KRhqBxG4QdKPaJVk85WWNuXKcfv2LYjrbVSZCAc",
  "key24": "5L3RAPoyos9TsxdFR95N2L5hkHQG7C9pBjDQGV7vFqftqdtAshCX42wvmN76UaewQVZHwC7sq6UtAEUf1pgWVPgb"
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
