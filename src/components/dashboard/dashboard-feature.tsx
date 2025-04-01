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
    "2Bbj1p4MMuohNBusWHDXLupSvyeBHYU4CjwS7MpawxGLRRziZc1QJvSFWshgbYUqBRouRZyXrZgorYeZgYiSQnrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqTAcYYqE5yvVqU3C19nf1Jpg528Tm3HGA6zBjawsR5R8zyzfJ69mbtDorumn5g8JRG3wcToCfvU84bNrxnCaWU",
  "key1": "51y5KPuqz5k9WKDEVUmtXXGUjFFuVtvfZQ6eCwg1qe9wadMgrmt1nyJ6QxR57Z5P7FdHAD6RASt3Qc2SntMa9iGC",
  "key2": "5kZiw8vRyPWHDi5odk4sow6chtdNRizNq7emaCi7omjZpE4yucthBRkUsqx7fBxrk3CNEfJmuGQHB6dauzdMJodk",
  "key3": "3yWhsp1Auj4BpjcwJtMU95ccW2GBCFWD2PCZ6F5bfo5ZpoYEND4JjMtyi5RXNBiVzBgBYuJjgZiMQeU2VAPtXgkc",
  "key4": "2jGE3CryVXWerQTh9jU6kTJGQskoF9E47TCNKYkKavBT9FJpe67fiZnEzAFL4GsW2qLL9Tr4jUbLAUGeKBHNSLDj",
  "key5": "4RdtNLzvFzYXWhE7vzW1nKfXVgSrNY4bsKX3vsCLQ58pmxRqif6KmEAQBLMA54gzGMc92PLwUzw5xpnAKCUpwh86",
  "key6": "5qDq1j6iMhz3E7wQuSUqXmGukJ5bgmACmz9CfkTVhHK9KaXvxgJUsVp8RJwwViVazxATGWePKqx4ompn5GpGUFHx",
  "key7": "38Vxr1zb7KrSt9mHrjzXm3bzezKugndM7R68wjX2s6DzTmJJKVanNsipukPocDwgUhkiX7n9epcKY7vK6iWHDMoY",
  "key8": "5d2xkjqv6tSqji6FUooWYxoPBVoo9hbWgn2xWXwuUjgbLXeiiNZLoEWvngn3vRSED8WXu9GvRpKdycfABgR5pELM",
  "key9": "39UmUQTDim2MHR2uUqYzjpAAbmnLZL2CSaythwqmhrq1vYtQLeCyYMkDyVvVrNQngSv3mMqZ1XeKmdb88eQBWqGH",
  "key10": "2pEwRVFVe69y7124gDc9RMJLu6xtvAkjWbpqPUuCQ5gfu7UQKoCD6V8Vjz2MsUSTJW5XNdgYFdNa8HqMVacxZp1N",
  "key11": "3KidZ1Km1bMCgo4wgkVVKiaG5QajzSrbyrcmRk6XoWxuWxhYfBit3ZLYtNJL9i3Pko9TmwhA8pvxQzz1AYt2iQH5",
  "key12": "49j51fAbiZZ4sXMZKje8tPdguAMCc3Qa6evMaknYq3dY2MVFixevsxpmqzCUivz7GVMrjnkDDBV1w7RbBy53QDWv",
  "key13": "2qk6rT1ASGYxLhJrNcSYEUPTALZHoMGtMCKnrTPBqTbPA6wZHANWpUhSWEKavYZH1rNvTKtb981uhKCHv5XWnCMp",
  "key14": "5s9WpcFLkCUp9Qo49S2iQTLQhM9dfAUpiSCejcbv4mNg5Zw5HAYcADCf3NqoeTdRD5pQqNrcbhEGpadzfGw8ZAq2",
  "key15": "3NuMGJVAzY9Wc5JoCAASMpoTrYcE2o5hH3pXsPQjF3a3p1ffCNoyFyMXzSXb7pDUyBqXjJkxC2F6VaFFvcZa7Q7g",
  "key16": "5yvskSGEQ7AYr6VanSLj8da2jnhXJChgai2H4Kd8NLAD7iyPJ67ptDTmKirYSeiDsPKYZ8iypESouCcAJVYNRHWM",
  "key17": "pRUkhbvfbFQoFBVDirJ6yLLvzJhPr6T2GEKwVYYVh8sgd6bNXMpqovf4UxARQVDe88uqkgArGcwXGzMRJ1j87UK",
  "key18": "66rHPnEXE9sAuqsv8SGRsAG1Zq5c74kjrNvwJhGrwMnKRFZFkWJKhXs9MLJ9RaxpNaxwq6fTnem9spttkzGoqAMS",
  "key19": "5SizaPyeaJZFUi6xUYmXWk6AQMAkYy8rfMKmp9dPdf7YV99dnGnPPUbUDMworW1LuH2WYFfqeajxMLdZ74XaSPS6",
  "key20": "3caZ7q7SMuB3STAW26pa76ehofaGercuFGJt7P88qE8yesv9cyRK3PS1vSe5tjB6MGCiMyfv2q99xMwWXRodBqzs",
  "key21": "5X136gAkEf247EcdUpvoLJQxH8rV6iQrwwh2Hkr5cDYPCppYqPGRDiri2gYhNvH9nTDcViqF3tj3rnHXS9yAt6op",
  "key22": "51Wyfg7sdWiHi11ro21umQtu5mKvczR1WoJLMxnN9L3HCZpKB6XPtgq18ZJ45siwZaoSTY7oEZi5cx4VKFYvwfdo",
  "key23": "4uU1c6VrCrdUReTx2KLtA2HhvaqMxyAGC5o9xAQebqv4hF4fwWicttx9jREbk7XqMF5CFoUfweC4EMizKKsBVfDa",
  "key24": "2peqh4DFP49mi55oLh7jYT8hY9iZjCU5P1JAEq9sL2qHU4pEZ7BCXwq8Q69Pe26uJFnSCjPjWuFwjHb8ciuXyKyv",
  "key25": "2DNGAja9v4cw2dxnjNHf3beTVDWHPYKiXcuJ5bdHpJW9mibowQzaGhyhE88PAx7DCytZDBycnVyp49tiquEE5MZb",
  "key26": "3FZCDPbsPTXZtLqyP7ZQYNCtG66Jjrxo7oJMi5pKynJsyUupCnXYt8LVZSHrrWDChtZf5HVM2EmEddR1Arbz1v3L",
  "key27": "4AEPeAa7VKS8szhPmLdk6HnePdzhvqq7Atzq1F3PMAzn6vCDkf8ZvYBNMKUmBVP3tCLxd5iaN96Gk3NENSQm13jt",
  "key28": "5EEdiamsypohwpAZF6fnEyr6EwNYbKWqA3XWFkP9MT8K5aadVzrtwYnutCUeCHqf8bVigG37zG43XxyX9ACP8rip",
  "key29": "5S6eSGJHtPnp1UcPoKPZD6xBkFLr5YtKtzQ4dwtT1XZj37B47Eua1xkvXRxY4bpZ7AuDyR3G1GiJ5XyJ1RcgAvtf",
  "key30": "3vwGkftzeL9Fp2NUzuSrw9jU1izDEaKT4SHrEtGizsCDi8Q86Tq7MCfEwqfTXoozYEsaFeKTwM5qSfiE7uBPBguo",
  "key31": "56s64wTbjZtuTiyJkHj64CfyPdw4khhosaQtTUbuUWcHM2kJJ5HQan4kGtzo9yBZNZ5c2c8aTLnDd4Aor42cUQsM",
  "key32": "2g5r2vLDaFfjn2WHvgzUMXxYbAGoGUW1CaySYnh88uM8qRRR3ut27aF5HWyT44VxpugDkKUu7wj5FZT9h9cDcidq",
  "key33": "3Dzmr5QKmKedGRkZmbMLB5LTrqp6nWgy9rp7ov4jkzoqBGxXN7CmCFHF5JAXVcG2i9JcoSrZaLgckxw7r7NUfy4V",
  "key34": "3X8fKWrtgR38gZ6aVQgz94cJUdBSkmFJGeW3HTHnYSzZ5RLZoUTa836nw7kRg4LXpho4aEHBBta5AAemcvRv6Ctz",
  "key35": "21ME7NV8hAxUwSAao2XsanpRNQyMJ1cPQUC1b2eJ8Sz8r75SDSsa8tKtPKFet4j8As6cpZUmrMgeBSAUqJN4u1pd",
  "key36": "KVzsyfQGrLTrkNbwhzvNE5pB4LA2obseki331MdXzzEQKbq6xoRz3iUtfBBRhkoQ8gnH1rh363umgtjp25pC9Mt"
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
