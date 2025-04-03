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
    "R69XaahTHJpbWYeKxvrxLNHTguDaH3M6FWeUXqR3QvZiZn2fP2TsVNL9savRGNBGoHnJHyQUmd7Wst7BwFM5q9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCoyXKy9Wf33oTvh7Xc4VG2QoG63nAzvzAJVzmmNkowP4Hg3Qnr2vg4eA86nU7fhxtiA6S5HFKaxPB4Zhf81vwB",
  "key1": "2PrVDBVgdpL8F2zjcLwD14fuM4ykzUkcgLJ96kx9CebeyY2Cj6GFCCY7KWM6q3bhKhV3iXh9UMz5mFkwBYu4WojY",
  "key2": "61K7ozgAVp6J7vG3QX7u15fPuQHyomnJFEHZwtxVAad6nwi5ZeRotRYqU3QzAWsGHpX4ybw3xvj4REtSSnPyJBBF",
  "key3": "4EvD92FB5GXNJSJ4JhRcNGnrX5W1vKxtFG5E9qrdXbkVhLPivQFqnBz3JTpXJnp2FJJ1xkYgXf3V8nL3ExG6wsX2",
  "key4": "2E2YLyfiQxo9efQCgefEVTvia8juscdATF9RBHbKamUoCWafY6KwZXm9X4CtRGZAAic8WTrkNpujGzHmroyykKXT",
  "key5": "3jWqBxoF5HcLNFC3EFrm4ARUBN4x4S9bFELoBTKsFSD9CphsW98AQFW2FPnf824VWh2fgNiqqziD9Sa87C9afFrU",
  "key6": "24DJjJFh8LP8KoiZ2Xby9xrugKFqq13xjy6CvM2pRjsEzfbcM8TASCrrQ5xnv6vgeKQSua2s7DwZ2imZMoMtMRNE",
  "key7": "53Fd7HQq7muKfPwJdjBnmAJSekwZDiY8v6J7xatc1u9k2J7BX95tSCaCYoTdcqAdL9LwhWsHjssDwgAeiGpBAV5o",
  "key8": "2gUHkZgB6BZB1D7UARq1d2wQ5iN4tcJ6ucjGwHfuJXKCFweesLAW5de5FuzHBbrqLC1LYLeJFpWtr2nmMwpYNh5B",
  "key9": "cfjcke3vcnfZNRx8dG6NXBiowpxTGeNZpiEqJgiPdYPi9SKrwHy32vz9evoN3VUDQd9dqztGqyqmXyMmgqD2WQA",
  "key10": "4XiVqQ4PpJqvFjuwuzuUQ9gixh5AUAGB2hshM7MKnWKP7KYFWgQ6mP6tzAELeZCW2KTY6WipHUKRgh28Uo5JsS63",
  "key11": "4S4TsC6wdrLtfYw4rAGqx5X9JP1VUvdcJjNU2AajUFz2To1faYucCNysjgcLxXqgcgm2qPxxdVcSonwAU4YntpeX",
  "key12": "2iooM11wEwAGKHFg6bxNEnq3txEkQmjQVNeuuNLKGbLYjipxFXDuiBBWcqwDjm26zds5RM1RAcSLPQvrRKhHUj5V",
  "key13": "67GBbrsqd1uexGx2eY9f5ZJKMKZnAPcchUpwMhZ8igYGhcFjGykbdve7GFP33k8GSsScnZ3MoED7RveNvYMY4yjQ",
  "key14": "33CwcoctFLsaHAtLSoxZkNy6NNW9e9d2eiH3sjueEwGp858B8VyMb1Pf8p7WwkgJHUWRzZDbXCAHVWuxzqtgwTx7",
  "key15": "DpU56mGGpiyk9CK8Ph2upccZFmpNkRWCPAeCtMt65qzdXsfnAZuAoZbJT7NgisFwXXfq6AfnJLW4d91m7gE1AxE",
  "key16": "2rQHZtWgXU6caTQLcsTbF1qc6PMKyFq1JMR31GqTUHTpvFpk35kfif27SoPGS31rX7qNCFTNfr3hUCNXLVGpgaLi",
  "key17": "9ft4yW4aFLNmv9KX6K13VjdVQeCD3zH31ZHxfe92PwhxBrtz7FBa1NZZc2R7GyNS2SRFdQZtnzG7EXeSEEadGjS",
  "key18": "2NScpnWvScbPN3x6sjSo7gHbwufWtWceFGFv7QgeGwCu3MS1Wy5DwaLKh8PahmXr2oXm8H2bJsyLuVrMdfHurZ8M",
  "key19": "2QNgt65jTEPjhAiNBinAqntFSxJT5MvEmZwxsTq2o6U9UdNda8ULtETenwD1q6Ykwkgbi9Q1sRYYdhhJsFNyHZ9o",
  "key20": "4L4EGPERaXe7mZitWcjh2Y4Z4FJiZxRkzERXrCFyk9cjoALryi3dMuMKeD19en2pLfxNdnpUECYai4m4cRLVB2ik",
  "key21": "2pA3ADTE1VPTJukAaNECgdvjxfGSFyEHLXgfAZBTKEP9SZ59uTJMnGtQkP6eiPHtb4AL7ZKKhsPTo5fzBcC1BvBw",
  "key22": "24BDMZQG5xC7FZE4Lu4iJgrXbhG2h6RV8RHYm8DytPqi3hxhHrwYtgtBBeEons4VwdL2DqaDDyRNh8hw8BtwYmCJ",
  "key23": "5xjBcKJciD7s9Y4zC53zjWyefuPtfnFMWsNYBSyqtufuSMufMgK7yisLAjbCJpfmPcjpaCkdPX3RRMCKaW7iTk9x",
  "key24": "47HgLRit6GLJnx5whQnoY7g7VgWjA4U1twNdzSP5WbEXHvGigtLPKLaFN4WiAx7uAVdZahhuWui7Fm2Uco8Gkpey",
  "key25": "2vGSULqYYz466UC6mq3QiE2xE9qZ1T2ADoJj2rByL2F3N1m4iPRJ6nd51dEcw13TPTFcGzaHGEZJKQqjHGSX3WQn",
  "key26": "5fg7TnW3ipYzu8VzkKb3jQveJeBgioBcWTTPXao48sn9LoJgvzFW5FG2vLpYyXGAFCefoY5MWgayJVYjJKbXJ42v",
  "key27": "4WrdGvmNSDHi8eEUZoESREgtqiMBT8U9PazmNKanRfP5uvGteYmCPxtPD6wgu5pMgVWZGAw17jJVQAWxHXejPEW5"
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
