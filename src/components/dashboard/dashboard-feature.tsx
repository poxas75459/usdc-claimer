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
    "2hUiKHvJZUtWF5hxjs8kntiKK6K4a4g5wGXoEVm7VGCMAr21bHiwFh2Q8RgyEcR4uBdVWkDPVmQynqBPiD1pUm2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MybJ4BM7X88kMvqx5Yw6H4JNFycynDdxrCyR6JynvSzQQsjj3Kr6yqGAVLReKtczZ8hEUymjSpF2eXVhtcpRKae",
  "key1": "53guHvkz9HFDx8HdEh5CfnaynEyjCgxemEWK11tBjwV74b3VaixJeuM6rnXECWaNZs8vjgHc3beD67npmbHhqMfw",
  "key2": "r7TYKvhtB62nZ2jY95PRdSoZsP2bkzLhHyedi3JxkQ78uyYidTQk6uhfVeuDezdgdFnhX29nZMSv52TtwtNcjEo",
  "key3": "4k81MiLV2yVjijA6k4eLhPGobtb428bybfS8yDS2J4uAXKKe7U1VMCBUZnL86pYL412yJVxLVvJqAKV3jzcBEhiF",
  "key4": "2EdEySyQYbzTZejJY4VzqpmV94BZeynsWnHSPzefFXN3qSadQVdpXd3VznQtZHSKQoNvhtwDBMTNHkuiak1Ab49W",
  "key5": "DGYapzpg22m4D7ehELcqwEoA38LJuvHSrwvopLyuEWWgmaATFTJU44JhUn15h3UcDmq66biF4dHJLem458EJXmK",
  "key6": "35WHVJDAiu4SHhDzEkXQLq7deUgCjPVnWH5SA9nUgj75vuAL65votRMzW9CF2BYFERxY7NfgGnSAK9GFSguH2AXA",
  "key7": "3jmiRtUfkSRJUTAuj72a4WTACX4e836X6giFG1DVkusJhoYVC7eG5yWMAGb3p1qQv1jQxMrtj6YBgwdxQ7NP6GS7",
  "key8": "41w968akZDPLJSA9ERT6iSr5PFL487cE7frhZcDF4wUgYjyreWmcDnc8jzuEmepS8nDwR8i5DBbXLTkPt9MrP41x",
  "key9": "61Fj9rZhwDPemU291rXZCi7SGvqVNR33YcaRL24FwXDcYF9kqCfg23raHeucrdVYAHRNZC486FiKros77b2JAJ7j",
  "key10": "2NhW4KizrL7xQhdswZvVkpoUcdJWYXASYnYYVPFHHSB56xEMvpRtw6p9MtsE4KrNLkGdgM5zKuagy8P1uzAyZZqz",
  "key11": "42TxcwFQ4vkAgm2SPUNqGfRxvWC5YuWr4X7VussXWLSdtposmMabynYpz7q7KcKLEBgBiQHVfEtjzUpP6EuY8bCj",
  "key12": "5Wf8YbkcYX7FT8gWn7wEibdsjD8Br1twNwRUMYB6EnQpg7broRctYk3oGMn8v9W66xMEH6dsAt6FNptJDeVhj7PP",
  "key13": "dznU1KbsTHzxQEUb9XSzKxSvmf1bmcctiJcKVJsCUFWPFpoedGZvwvudhhtxzvo5zDZRg8AGKyafv3NimtSyPRN",
  "key14": "3LeEA5Vor7vMZ6jNBp7MPChsaM6XSjPTQo1YpLa3M1kvpcd2ZbNguVjL8RpvW51X9ZJx4iaYQ6MQSZA7yPNjuFYS",
  "key15": "2FSwtBnH99E4NH6pSALjU5ohY6aKWm6QHMYqLpGG5b8P5f9VmFFd4xG2rfSc1x3JFkBDw1m3Xo5SmJ5n5fsiGopG",
  "key16": "ZWe7ZEQLBR3VoN9zuDVxogNRjg8gK7Nkz7Pr55W4kBNy6oiiZiAHRNQH5XCxZ1pTbDzESSxsWY2G4HH79jWgCHP",
  "key17": "2jeJy6b2VFbi71YYstamJvj1EcPxx2oiUsu9N66qpNja2CapzqPTERJ4HWRsCEj2UyzZcCLN2BqiujU66dUKg2Un",
  "key18": "tuGp9Nx12XDpfQDp49AvMNBsMSEuxmGnhHH7kW2DxdSre74gVTmTrhTGM9USvCB1hWAtPk6xXBsNs3iY6U6BKF9",
  "key19": "txEk4NLCpV5bm61uZ9xnE7gVpv9iRCV3cHzjGm9EM6bS9Zh8Pji2RZwvqz747sG1YaVWafYd8duLRLjKbaWb5Ev",
  "key20": "4tGkJz4GPhAa1vbeDBUmhinQzAeBGDxRN8d1ozhSoW2D3LrLEsD1JHEkYrmExwbEQKDS7rYAHK9iZSgFL9CPVU1E",
  "key21": "n1KZf5kVwBLP2yrezzEfhirxP4vNFTPDJNyskXsWWh4uyWhhpoZhxRXWrLTGkLxBTKnbtK8uR3FKW3F6uhFr42H",
  "key22": "5MCg1AneEXbsDBfscQ2FBU7axNVDmzDLrLu9ELs7uWuF5b2Ujeho1zADniDpaMF5ewnVpdjBhs5gcbw1aCLH9Bp9",
  "key23": "mqcxHfQzuQjDQgrj8XYG7iU7imP6JLjpFvh5m2jehRkBcwJq5CFSUnTWUjrwUa5MpzvFN1zB4yenpGzxPE3chmE",
  "key24": "65pGbVBgFLfn28USUCVDgZyo8hXTW8UrpYgPgmKJSASBc57QmjN7XKi3YQaXu2WAmPGgRyg5NNVHXHK1tMkm9GSp",
  "key25": "iiTe6zqoy4ZRp9t4XRaTxhsvjNrqKBdt3NwrdcyQ8CzdWEPmwZ3KJP4DDiGWvk3hXKyTkq5aVz5HyGGUMkj9gwQ",
  "key26": "LXzuAFMvbj4kABmbv5MxtDuynbkfNsSUQsv6AjbwXAuprQr7mN9m96e6vbgrZ9C37mFfLXJFoc5XNZhntHmCy3d",
  "key27": "fnBDYtjgE4M3h92tPjCXEnr6uS3nGSmE3VaWz78MVRovrYTNx6GiQbx8n3XUR97Th7k6aacUxd4LAwWAqFkqL8d",
  "key28": "2TaB3epyMyAp7Bdg5FAXbBBQkecaitfpy9P9kmLBWwkKGy1J6kTeXQJQyoqZpMoxJQ23uCQQWURE4oCmupC8M4x1"
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
