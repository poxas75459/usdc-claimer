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
    "3mrfAyy1sWaHqzG5TrPYJhsf1fdZCnKrPjzCLQ24PeboDiYcMqdns74tZVYkonCqN864kfYb9aw1NaGTwdbxBYrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qY3e6jZFk6bkWUVdPpXUppamzMpJtZAkHBhei6BAM8YSBg8v3nAnwHsCvQjbyqDBfyUFtBHHCiWgCgSJJcdJzJo",
  "key1": "47CSkrbj8Nxzq2aV7yVY2bUmssFMZCZ6g8BLo9u8GnpESWVFZoussTDU2NadsBpF1BVTj8SjbgkPdjcp3NrFe3T",
  "key2": "5zVSt91Sdu8suwWLd2nphrY4UVVQzmAv4zMjaWjFMUYc7Mf2rhzouufSy24u1n2T9Sogq7UNfw8dPYCc1CAPMiC2",
  "key3": "3ihiusD1BKuAb5ZQNeDyh6xjLP2UGKUp1VeMwJfeoYJjdJYspAVFHjtEcN1RpdZp1zczZYDPWUAiP9DMqYTNNxxE",
  "key4": "4MU1kgbhxWafnaBPFC6KH9TG1yaRNZr9KAunvCDyxXwWMkmLkVRTcuczXtQjMXVuMhZmD8oFqPRw478sdGwRrAWR",
  "key5": "45Q6F8ooVPxqVpPxhNwzVrKrov3JRSb8ucBqcDcpLqFAN62Voo5BEZD32YWxYgN4AwWgMtAAmMutoEcEX3KNxcDW",
  "key6": "yZ1B281S7qncAomwbj36ZtuBxsPLwdsKJ2ukG6SKctjgy8ZE5YCXMVbzYgcJNtwEgxtff3JFHSCnFZJVzsofNtu",
  "key7": "57rTv8yYHaoTRJmR8uEdRJmihsGT2s4KuA5FLqPXidUK4wWbdMGyauSiR6M8FQo9TkcckbhHQtz6Yfp8AMTPJouu",
  "key8": "44x5TgHoGpFCUVDGp8Q9oZweYKCWEN79e3T4H7MdudCZWdqdqjK9P8pTyLaPusvMEcy3N4nBDUfxaVX5UTWtV4Cn",
  "key9": "66b56JKenFmQe9DpCvmE7DJWD1NLnBmVT7wZjrB8KfQi8akqLRLMy4yNzsrJgGAbWZisz3w18vUzwwALY3FDSX9W",
  "key10": "BcZ8GS5WrSNqbdofvyW8fWaTZwjjBzjJUvkUd3X4fxDLr3T83nPyGCPsfEeK7D6QdPfxhn3nWeLSoaBtcDL6Hqb",
  "key11": "2UneodibXtdg73W4HeikcHQMq3SMuBidZPb72VatffRi37tK9GmFBdFsdw9xijC6GrfQre15U7gHMsq3LppYnJWD",
  "key12": "42fULRJS8AQz38XsUKDeE5NDDeTQHn479USdXrgfEQZQDuhHm84uXuEhYvZYYrFgpYMXy5KivPwHfq68Exi7hL3w",
  "key13": "2gx5wUg9zW5bzHjTm7Q22v59oeke5PWF5V2qQKcTicbWogX8JqwT9dtbwdx8TdQmmprRHcMme5aGvWojivNUL7zX",
  "key14": "4WNdMjL9aoyDcCD4VsY4ABAJ7jzBuCjMJWmicX1caT91rJd1Bd2nLrvM6xANNzD5gMFqhbA9DCnDUyK9RwQW3aKK",
  "key15": "2wep9avzHLE26bacVC6PDX1mKVqk6qjZ8zcNn87zxZSAnFTWptGqR3ZLyTLmgZA73Hycu9pTKPehShyHzxXi9tT1",
  "key16": "5xsWAgB1XnHKw1YnPMtEzwYJyGG5DWkxPN9c7AgW2G1nLj7wNLp23dQKk17WrTi3vKZmZqAseTGL1gSH6HhXeC77",
  "key17": "2rezve9Y3ryn8D4jKpEizMoDuZGxvZjW1WfZuu7mMCHhbq5AGaCzxKDWZqiK7yymprsZWUPCDB5WJ6XV6pVpbFA5",
  "key18": "qT3FfyvkZVKxAZizc52n9X45XE8aq4e1Qwq3Msv6GwxGDdem376jfFZJyjGtgCENqF91adkK63qKGaUmr1tnHLY",
  "key19": "2jpJ8GnTfEFBtPaZP2LudfZ6C24mFCfGQQwiipuBC6SuyKQxp3rU12Q92FRcbPg5ZQi62U9GX12y3CU3iWCKBXH7",
  "key20": "2rmgeaGk1sBMVuiHFVxvEJPFz8zmKoVvmjM8i4TPufvdiMf3CqJ83spf1ryCzR13N7dyS6KnRewjrDmJweYtKy91",
  "key21": "4kioJhxQLqG39oQ4BerE4CYtsmtkiFhsnZBWTkW2XyTP3MgGdG7xLDuSa4EP1hVTCtCvSyqbyHTgcEgdbxw1nzvE",
  "key22": "MV8F7Lp6nFpN9yNwtZijmrZnj3JRH2ZSEZgzMfNgjKw4F4UqHD5pKG3TewnuRAkrUVttFDHq4LJxH6nj8S7MFtD",
  "key23": "4PTjYWRNkLrBrkuFTkjHPgHeCY8VKxqbzakfnHRBpmQi6r7wMGYsoQvChjNRfvErV1gcgW8MqecC6jdaEh2WYEno",
  "key24": "64wjB2pLyUzNYgor3xn4DBcZBA6kugb7vA3vJG99CJq114V6FUs3pU2p4VgUswQEUzBiHw8YdkwGBrW4K7QvXc3X",
  "key25": "2wj2WSu9rJ25S1StSVFehqxc2b7R6AnPjgKhsSkDqSSzNsV5ouMEvrZPXfZsKhBmFjALoxhgNDCddkkHcUyGpHdE",
  "key26": "2eycWjJBs5ATf9gbhJ7xgQaReHHbGWbaJASHMTw7DHqaaXYtdK8YbJvfJa8U28qmocjf8teTPaioFs4oRUdW2ShW",
  "key27": "4zom7SpM2gtNFsoJxTy6pxSwvvWZrEruPeSzu7W74CMGTbHUUd8Pi34NBQQPh9AeT5A63HFSpiUYAeaNSiZ6dfqW",
  "key28": "2EzRAvvbpcPBQnLjH2NH1PPpvhJzFdwHgWc32uTacTddzAJMqPQfg1Jj8vJkWFYUssrKMPb7afWHQiQCAtmtNirR",
  "key29": "2RtcsfS2cD4K7aRmfi2QmCZedmrcAd7VZKZVPAb9juJ1ze9oSQkzKRgGxR4zfEiLzU6pBdDLfEb2kF4Yyf2k27Ht",
  "key30": "4e8CRmsEVZqCxjuGhx9Vx56DwWVkFHo1oad1ghYDN4HyRWhFg8Ay7bcDKApZXdH1CSD6oSdYLA59iZxK5rWwxAff",
  "key31": "5vvXuXf9xANxJGXTBpWhEAfMWTVUeo62WgvoPtRZiwemKYRVW3t94zXJoAy222DLgFJRovuuNPCePjTGdbqukRdN",
  "key32": "4caNy4PmY3JMWT8TBK6vfQ9RBLz5Sda8F1pThMnV4jzQM2utMNBDcVBnD4sMdLyhp5L7nT25h8bEhLi5PGA89s4W",
  "key33": "4PGi9jeGnm9MmqdSfCkK5QWVdHWEnvBdN3AQmL83NhCfD6gg2rnEaK3JCN4bH8iaVqu9wyAxsBaG8E1jw5nDiTqu",
  "key34": "3NRdzb6Sfk4gBGvYwkQ2YvH5gECgGZrEyYD5zmUrZ1hXPzWcRRVzdR1KCW4Yph5J2pPdLLjwscy5j5kBnLAAaCJH",
  "key35": "4rH3Fd4iXG9mNGX51o6uk5N6fntFkXqxSyWmR1K3tJ1uShr3PxPMCyEEJ3vWVBmaW5r8VkN5GuhGrqbyQhJepuMc",
  "key36": "3wbJMHVseuYjqB6hwraBFVWdGWBCABixePNNyVHshN8WC7eDj4mWt21rzTV3NzSfpMMtRaUJx1ByfnA9zqSAfQU8",
  "key37": "5V2wnsZ63U2B7wTHwFQHVXTf9xbvMgb9pk6ZUNVP8ppv2jmjJLgsjMpREvXGWvyAnQAM9ouYASqMRi1iz2NSKuYx",
  "key38": "3fFjfETAjEoWaRz2HfNitxBUGA24TYmXp7MXHNZ5k2wT5ZrFcByH1KfAeQGJgmCHZ6Ss9gYUQkwZjTumLwuJNf6t",
  "key39": "4PnczDMAwd5MGjyDmvMEPSKMKbaLdpA4toTumz1T41HFxo2XJ66nNJZe79gTt1T32951mXiBEWseyh9Gzmsb5dQu",
  "key40": "5P7nHKxLiyipRhhu5UYUnTLJsDshh95dWor4tfMwhfuYEPtnfdeYWPmimD8rTFovFxN38RUK1Erpnbr4PaSV4L6w",
  "key41": "2UW6y5aU6sBvRpETXNRp5EYdwDn9D8F5B6Ny43ucGmw43Rwy8jAs7p9rUkgz9X7s1Udhav2BcjtXerShmiXN4VWD",
  "key42": "3jzpUWyuybPWszqoNK33pP6pWYfJ1LjAQCj9wghxaJf6oWJgSHXuBsKY5KBX3M8MTyirx5uUqforSauonkzz6h8x",
  "key43": "4eXAasauBWmEKosqBtDGRxAXKaqTrHpnPTDmb78UBabrXMMiFNRbdyHGcNihMhCszu7247Cy96YiFUVrat15sYsA",
  "key44": "3Q6u8BSrysjdapEm9WnqUY58qXb16LFpnJmZrfymvxeP43G9RLLpE5JoX646SVrNfci6bEnV2vGqWJBRrJcxGezq",
  "key45": "5shWxBHp3GQAUNZ2M89fWyQmDi8eA6P9t9Suc38FTwWCsbvghfwzvHeutn12G3kT2UuYAFPb5464xhokkavCKqCf",
  "key46": "55r1Uh69KkLx61ucp3gDGegxjkMB8hVnxASyiMFoMJRmUHPUHMXoTk6yD18ytVHfHNAeB8m4AfiswyqYCkMCMCiz",
  "key47": "J5RSHMubanT6TNm5ZNYfx7noLnS57QwPpoXLZfdZs8tkYGzvXRyJ2vt6jEuM1Tq2vbX1f3mEVg99rvjvFYxWmTD",
  "key48": "5SnXhUJVLgaytGKGvkZHhpkTYDPUtBSegMMq8gv7c16sxmFSWaaRiRwxpmmq64Ctyrbjtpxb8MPz29ysscftkoUs"
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
