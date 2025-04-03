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
    "xvQiqE3PDoepwnoJYBkdTWSiUfEGjEe1oJcRzCkM5yEVr3LeDQBVeSv1CycfdUX3PutGStYKbk3kuCY3CV7hp8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BL1Lo6EDrsufpqrdw1d5UbZCyTMgCGPWhyoZ8qd1c6DJScooMjfA1imSWXrBzeFnDi7PdkbpbqZ47JgbtZaN42q",
  "key1": "5g3WKCZ8BhbRL52xxd18PPVNCFzEZCTXXiMk19qtZ5Ug3pNsyMuSDo4bzCZuwtiUDycLzK3WGCP6rTGmZM9Jp3De",
  "key2": "5TGg1KuXdvXoiibBncFkn7quZJauBfMM8v7wxZp8akbfDfSwZF36iaVcA2gTBXEjyVuX3LdtRcj48eBa1QiQhvym",
  "key3": "4tr6o7Gra9HA8Q8xKNgJSg95bv7WLcfm6zHUbwa4peQtkVGGBcffyqfiYHXTEsKyZPbHcvYKaatLjW6APfrkRNM9",
  "key4": "2NhJFTLAcgZ6YaLfXiYGnucBs4gMBAa58xzeeVKEpZp8eXTmuM6e3kkabxxS4gDLAgRC8ihE9MfV5HQ6gm8XdrUd",
  "key5": "ULA5r3FrenMbXXH4hVHEcPSin6fCDuecaD4uMmMJHU1SgfYGEzSXGB8U2F7ghmaZJoyZyBkyNFVHhf2USF7F3k6",
  "key6": "2zsujm8YMgf2fgMMGzSU3yrHkYz3AWqufT6S6DJS2Y4nKeRpwWYFrExGnRktrdm6sx77EYBgD7tA8GsgpuNse4v5",
  "key7": "5fgVGMqwMRcEM9ihShvfn1SNrQCjk46VWbi79Z4urp1FC6sLrP87wtCg3gHKiYBPU7Jk2ze75AsR37n4TbrmMtg1",
  "key8": "5A8LCMW5J6GXwN36QGsNjD9fmC3h7mwdAHLgJB5kksYSyMgwFczJQMdb9mug6sazPYTMYx5XyZJwomykFm1WRLMz",
  "key9": "4gZTSwzwogCpfU3RosDuKbvTZ6DwCYLtAwEEC1zydeJkeBP6yjdzBPrJMHjCzaHtZ6szTsHSiYNmMBKEyaCPEXpN",
  "key10": "4tMN6mr8Z246PnpiahcercB3WEwwSkUHdsDmyY1VstmdsiC3JYmZP6xkek9RyocnNb8n3V9nyNQDGxjBzbWBBQYn",
  "key11": "51GHBUnHxvjmiqyumhcrWJoCRWosHHiLrKDX3dZ2HmrEUExP39ofQweV6KDPZj5SVRHQTwrrj22vHDhn1V5D9Ju",
  "key12": "xwujw3FUZwGoxW5nzA1fFkQkEVtzpivMUTV3zGqsrgWqEv4PH67ziu7kQwtixVHUDyU1F2wWni2inTszyFL1ccP",
  "key13": "4eQHCe8snMqPxk4HR5bmPEAj7mreN15aNS6zdALrynRub3xrNEQfL1jec1MppUGgcH5oU3DftZ3qabhAwjvyHSZq",
  "key14": "3JiW2tUTTBvJDyrrn6sxytHzUeY84oRum2qq6JPMWfQHW9FPJpiqtvfTcXBB1TL4AEBnHG2fQLNfwDXtmSScuq6w",
  "key15": "4jpwmYyPiAx5cG4ncCDocRJZHvQy6BKdBvdEQcvjbzBQQ45xosCkzSENkorqxAZLKgDPCU2g7kW2b12w8nqkHawQ",
  "key16": "5UDdUVk8DhHzNhMhDvE3sU2P7GZpqfTd73J8MJYsQdX4s7Jo2tk7h4D1XYy6Hby4jScuUEJ3pCSvbkUCCk1ySnvw",
  "key17": "5Ttvc93EYLQCQW8VoY8y747ShCx8sWGGB98cq6W8oJd7k19uBkrqYh1JeSy5yDLuDUF9RWZpubtaNHVPLDtbEjHf",
  "key18": "3NaBCEZqkjgiqPu27XX3iniGfMrpXF6zW4KxftzFbWwVcB48VuF1UXAWVALxjLRV8ChtJi8hKtT6SdCYFgMaQP8V",
  "key19": "GHzVPCcZjjGPTcbrkejHZu6MdSYUhcEB57J6Cyju4tSMqG3p97qemFyc4UrktoYWSv4UBaZPZhLir2msab8Dk5C",
  "key20": "2DZNydFU4icZb1jRavKHepUk56bbNpLjbJeR6P1Ut9WwL43NxevacXwjWPssgEfPJf1M3JX89cmLyt2uhVUABTJC",
  "key21": "5DGDBBZK26BBy6TwzaYcMP1WaSFCrLSuWTwQqPxMT83qUTeB1FVYqEAGHttQY78YFxWQNQtnsnq5pdiTcbdyWMJD",
  "key22": "3azGRWcpay9MeEtC3UBuTbHWWHndXLNeJJRCKNR41f2U7kAMzpbEf4qpmbRWRMubR9ejmXMRsDxcff9ySxGViP38",
  "key23": "49a8EqhZt5hbVMyz9pdnWCCtXSFNyZU9rtmDHVMLdL7eD26Upm9kxSDZdpM8z5YYZvQtJsnURJHGtfrxc9QqQPj6",
  "key24": "3xqZabsizbXHQtFxdac3yZVkYFB3svecNkjEsBBRrW3kUN2WnA8UtQ8du5AACha6GNJCCbvuSuKwfqjbvJWQMcsh",
  "key25": "5uH7b1hK6jP7rQAfyyC2HoSwiDZFD2ynJxC19VgcF9CTNXskAwxR7ikohqD2wHdR4DM7wTLerUATGWY4YMRK98e",
  "key26": "hCbyWXkWJCdgoSQye6u1ky5Je3x3kJeTXwuELzzcj5kNMfRAZBsHxhCysBSrUNbWcByWnCJoF6oRRviCQvxYuLs"
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
