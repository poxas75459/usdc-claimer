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
    "5mmQubdUxW6UpTHES9pXn6p3Hs2W4nGXdrZDwjGbh6V49S2JFZLFv77jHiXzKzDGm8LwxVEuFzgRG4zWbhLyK9NX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NmNr2ZPY5uK7U3tJzBnwXwG1t5W55h3v8EKutLbNaWtR1xyQUF1QuoXFJzJSuAX83FD7ygmo3U9xQGEDz3erGk8",
  "key1": "2Xmx6xQoZo1vPNGZYfcCkPUYJrhmvLpGPvRfBPsxmhh1bQXjjycM7cqzu1d7NvogY9AB5LsPpJxkD4n8bj4ndGJC",
  "key2": "64nHrTJ328stMYnurFkeVxV6nzf1Gk8RQ9UtTwei6vsdywwMt7yXTuh1rHkxd1zfAL4jvA5ixP8MJaX4M67cYMN7",
  "key3": "4a1A6U63JiHjKP2gzQNf26ZwZhrdZ42xV5TR3GyzhHPmuqDoRcSykMaVMT4qy14iMbXyQWuczwDsV3pUe87zN6Vx",
  "key4": "3aobr7KXEk3sJwNuHKpdCvZ9wxbioEH7LVgqrRNk7qjyZErkzFRwNdM25a1quyC9Vx81HhmgpR2W75uMwQ6wZTN6",
  "key5": "4D31mNTXTNTw1f5LjymVcpjdJvUkyPMVp6CdYeDsMZ5HFzaKFPHWDCxk2sXfCggmUaponmqjbg2VXNeKZACoZnaW",
  "key6": "53PKi6o71e8mBW77WiUZSsHG2ArRg9YCYjq4Jxfy52gue8QqKShiZQ2GfnxN8grhwBwy93PFfQURTEYc836zTqt3",
  "key7": "3RGMFbiDUGTD17f7aFKkwn17sT3jVrsHQENrFne3aurLwjHaSsvVeZzipoq2XTv5hceQbvrWoFmDQedmyRa2w96R",
  "key8": "5SsVtgJopKZ5Z8YzY9hnodEkvzytCpPiPDnxcsuXfHHq33C3i5CLpcDM2XWU1uVCdDkk82yuQzBnp49YdyuiM9Wd",
  "key9": "4T2J2wmTPDC6sqmJQ94CoJhf2DeXzLWgsZkJCyDt77dnatSyGyH5afM8sZnWonsBvnFJYjKEGCtzhKDyiZWdzjrp",
  "key10": "PfZCgPBYatAqgnYrguusfuPoFaMGeDxtEXz5bkh25VCpVbbVBEpARjQbxEHnrrq3rt4ix3HkeRm6Y32144DYhn8",
  "key11": "2U26GA9E1VoVNRdGdsGT5jGf32Q19H8nhQZRucdUcoWZRbAHGw1KwhERjDS531DSwqerwPJNtNzAYKgJnJNPhk9w",
  "key12": "2iXs9T74oDjiDw396YvT6ffKpxgkPjz97hbLvQUaWABjgMn8XrjqvE5b63wr5kjTiL67UWZ4SXCCTne99Mb4L8SL",
  "key13": "2TTz2csxXpPedVsW7DkDGuzyx2bKtvKRy2JXoVj1ZhKJSqzd9ukCaw2kCB32z8uAwsRPUbX75L9hmjyvDHzMEkXz",
  "key14": "2hWoSHYG3UsvnFaREfUmDRyS4D3NeAxu74zvceCTCb1Lvj2LuHxs7YgkErp8XyyPgvZAV87rsyx1QAT37jFMriK9",
  "key15": "59rtnsh3S759St1pYTCRGCLDkfEJJEsMvxmbM7ezsS5JqiiicaLwa4Fn7Urup4ZU7kbY2XxSE81vLP31EeXoRjzm",
  "key16": "4bnTG6kM1LZdLpaJgAQWAUyEZ8tKJ6dY9nA1zBJmYkWQhGGmzrNm9vFZkxUsUGKPYanMZhr4ukPTDMHQqLGbsdDb",
  "key17": "2uyKBHQLLgV6FtXzM3s4zkTAyv2beVsuUZ8VB51pm9mtCkSbcTgz9Fh4q4kAemo43vytrbRbAs1M7hdpLT9F8fK5",
  "key18": "3hnK9PrsCLrTMf1s6oLrLURb6p1JaFeo45b3Q4SGqUV5qvDtgDgSFMssaPeuck9FU5sTSU8Gusfrmc7WJvusoJ8p",
  "key19": "5khVb9DVcsWHDLv2zpLHbDpt63CjwoCrTF19ACqdhTsc6PcdGKMD521MxQmLRKD9kM8HaXTm6R4QB1Zs9X5LunSw",
  "key20": "3DWZx8xwfgDRasZnuzjPw8WtFqLnt9rvRFVxqRh2emchz1kfXLimFW2WncB3T5SvtdLBW4nkREyE627DGgbu1r2x",
  "key21": "3DXYjc1cwRHnuhbTtUwYzdmdkYtg3b52YRqrqA6igJ4nSpeDMha1ie4UuVDQLkNBDiajLDzaKD2UyeVowHRyUXtB",
  "key22": "3WKnBANsuVkFGxbF3EC8HZERc4JZ8vBdz9Rw7hTpXrz8ETCyM1Bd2MsN7Rm6rNS7fd6YAVxAXNrZvWvr8Rroi6xp",
  "key23": "2L1jviPs6hATqDqbxyp5RHaX7zSZnVDVFzhr9GEiTeM58Mc5GGi5hkyriwrg1xuZYMHBGVuQx2BiAYw66GjeqmvT",
  "key24": "2J5CpYRzDj1djGXZpm71fAbpWDHDBPbek3VrPDJGCAwt5GWEHf5PvrBLE71f2M51M4d7kGm7JpALuTmj8Q8ojrU8",
  "key25": "4EUwt8xTLvFKZ4oZ7qPWMTnD9XmSa1KDboGksSZpAiNSPGeTKHSvZcV9K2dNXHnCBQ9yNUJyq757uAVXoW8UY9ft",
  "key26": "2mc7bDiTiNEqVMwCbU94JyG86Bndbv2b3ofc9yEfTJXGYEyURbmKtMjxBgszMLAB7nZNWjZCga3cSXrmMcXuZ122",
  "key27": "3TWNzjb1LnGYAJXeSWVmzpP3EW3unuiac4uMEhkkHAv8mQ2vr5BLHcHsPCF8TxEd57XCdgv5aYEt4nmpu2uvqmUP",
  "key28": "gKJ2y68FZmwvRzB7Tg7yjobgXRsc6FqXzqvy3eNFuESpfcLBypasi4aVwYAHYvdUCT2kCDj3jmnm5L3HAyPiVL8",
  "key29": "2kxpY9yDn7tXU6WrF79PNoQPmn9BkWTStxYKUbLj5gDA88p64Amb9pTghAKXG8g3ngr9QsYkFt41wUQXTqf4uLA2",
  "key30": "4kewc7d6nq5PimvoHWnR3AureG3EqFuckpf1CSkkfMq4uewGXPz5U2CRdrHBHjzDdPY9d75SpTsaP13xpavpMpHf",
  "key31": "5TQLKMtQiHnzEQWGkNz9r3HrajvDunMCCaxjdEZj5KYG5B1oAGXKTEK1NNH1hH5baPZ1fPdAoqqBaWhGrAwivqDq",
  "key32": "3pjMJsUrANBZsWSA2fiDBYMZWEce5dTU43VbPGo5zS5PVeWEigyzmjDBa64wvFgMh3tBkMzK5UzPLib1XBQS1jhi",
  "key33": "2gaAhfnxRvkgoXzwttekxxaJKt4iUH6czUM1RXp95XxTmT2Yar6h3ptCsopqSyPnmarv17nKR1SFUngWg5MHmjxj",
  "key34": "2kYuN4aEEqcychttnUNRhnqrDAbMuEJpify43qiCaZKVvNUG2fEJnX8SMhyQfphBDGvWc5M8kiDyozvPZwcDsfhJ",
  "key35": "3Saxx6BKhgaSEHvTvZoKSeRJWxZX8T5Ze2RfqpqJiShU8qtnfDK6PvqS1BPSfqt1ThgtzHzPqKQW6ynqJrSVbNq1",
  "key36": "3cRWj223LyPGAyfr96Exa6gsUjrqyEgKg1ji8uPTDStL2uFi8w7y4tfvfP4jUwTf6fWTBPY2sQ9LHXLVsApQhjxU"
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
