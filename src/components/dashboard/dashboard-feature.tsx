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
    "2hoGk5GvSh3qCmp6GrWxmA8fHk9m5gC7Ga1vpqw51boEUbxux8Waa2TNbuUhEPcXtcR2PKjNJLtXuv1x2ytFiTA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rru4zeBUcsSHUXhU4SdA2J89jqsDMY8TjSxshNfSBA2foCQy3hS4ezdm7DJNQ3tg3LgzDvxmVCwDNqpG2EHC3hF",
  "key1": "2fBS76txAhPtkRibAymz7J1j7ZoA16ZWrwED9EXUvrcbqrmzJbJJWiX9mypWmr75wRB1ZA8JhKpEAH9SmdAbvZra",
  "key2": "3VExqExQ2BTev1be4vaRtG3aF6xsFcyB5DRqAgxRp3kgZKrJZxFfFBXUBwGHdtburDyjT9MBMBrgkUWg4rHqR2Gc",
  "key3": "66xe71jfCyTRkZPR3M2yA5EgLHf37jxRbPehdfNap2Xx6BjVzvXPmb4GkN76wMU3yx364844NpnEfjVeb6SB4pvJ",
  "key4": "2kz9PYrBtKeuqxRLrhvVuPMGYWNsYHUBZaGUdAa2xSMR3XWKDN67JVNCsXF3crhMoym4c8CqJjSXdqgsZsuNiKM8",
  "key5": "38MmnnVKxzuTnoJkZrVBSGYubzTU5nuLfqbwndCffSnNhYgzcAEGvm9hvCc3uEvsnN1PwtJTDSZBrTcPfvFjjTb7",
  "key6": "3Eq3mZ3pA4tSPHHoFhQySnTr5XLyf7sitdFYCRGdr4Hf9znazYbQJPRDb6DEWUnMKV7wSjMuv6Cnuef2CDRLfu9J",
  "key7": "2fHMCmnAyWpUjY1EpmJ4krezUpk18a3JT8P3Dh9rEzJnfJAKTGC6ZTcavC8HHHq8X9FLSU5roa3rD12mYBFGZyuv",
  "key8": "4gmSjf5J3kZftLPu93V43b29gw68TYpiSQzvMdsrb4ZnJxGTRNKpF1GMhF4dHgcfDo651SJoixEoChWXqkx4Pu7X",
  "key9": "4MVBBTjNEdDVq1LQt5P8AWp7JLG2MCpaGyAdfEoAogPYQTX1yE2d3a1awGdbPf1rXCYRuQknY63ixEGrxk28CzeJ",
  "key10": "3xxiSpEzKJCzNY7NYUftXV4Vy44hHzQpgR3ZdWCyJvDu528AERpUCbf9JNS2wuRhibGVF7gmyuwznipCPsKMnPHZ",
  "key11": "5HaeS5HxPWMw81azkHdB2jT9mYNijy1khPZDRnrwgT9Pdcoxuczyn1kWeH4Mc2xBofiYETRFFbBnCkMUkJ5dTFsE",
  "key12": "231GsBJbrpYDR6g2k9K4j48dgDHVYg5M4bYEvY3jykz3yCHAQXfeE2pKJXbX3LpoqvsWfA7PLRYqoNY9Qe9F5K2H",
  "key13": "2ivUvvjKK5CUdY6w8e8a8ypLD1mtScj5dy6AmocV5RkbeKA5PhTkLc9M2qF8oB7DuJcssZE1zhDsxMnPFc8afoeY",
  "key14": "5NV3XH8YMQdsQ3bVd4VLf3UTPUfgjGscT8gve7zFRSX1niwYKNQ2PSU5Gq5N5j1vGT2pvQJxDSB4JGaMXTUrKTgW",
  "key15": "66bt4eCm7FgQxRmCFmApisU9XscoVAPjRdKQU5TdzN4cyJixXXxHZKpSTy4DPpBEBsyKwkofQThpAke7irC5ojd2",
  "key16": "3JtpGuEUL7ZcaS61wByWm5G88tHJbdfhJJLsCzUUhrEHvwUCnJGKKaRvkCeJiysX1GUvP5SxwvcLDagoJguvqoAk",
  "key17": "2dExjHmGEGBq4VoWSVV8GwaXCvyAy3dYN9wuDfpzvZn5GbNug6FNWxeLAttAbKb75krRbdgHCKMpBaomtAwMrkuK",
  "key18": "3muEsXUhpH2Nmmwzv76qsKVaYjr6BJP7y7GbPTbkfxQNtFbw9bKHTBLJEjrP9vJL4ABTJYhmxPz5zhDUvur2X8w5",
  "key19": "21ZZoRxv5TCwGsi5rSfVnN7WQWamXoB2JT57qgH2amS85jBWA4yWs9pX2HDyJvxspB9qmruLYggCit814jRzANoo",
  "key20": "VMzfncLGL9joqGN7dK7nYYNaiKw2NR7HD3EUsasbWc1dRwNdzTgUyew6nNW25sFUMn2Ue9zDPCEwxA2PoDwWRco",
  "key21": "2iwSyibG8QtQV7dHm1KueTLt66LPtT4YBqp19FHwbZk87hXzGSKekw5uFUDHVoftxcCA35YPvjA3UuiS8f7H24p5",
  "key22": "56esHxsNAXyAeKuaVSWXnE2wRwTBnkVE8YhxTAQVt2sPGjYcBneDPHGjqvi38S5JQyxFb4L6TuL5DaSFVEodzATs",
  "key23": "jd4FKJwzjNWZkPTi4HWhXZwLyh6QKwqQVfaWqEsn9HVGyeVnhsKPP8qqVBEJuVczWtVKyn3gLPSyGBUnQrsh3kA",
  "key24": "2Vgr7e68TKLEdapWf44wVY8hvxTxsQdcDzKmQcZe9wbMbfNXxwcZPQzMVpTvgAw4nSbQfeVhVryfMbqyQVuWZY4m"
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
