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
    "5Ncof9HHW6P3NUJLzTXQ4iTe9mK7FGxQHSeunJ1BiaRVhS94QSRUg962mtNEbuj7kyjSbgwLbur5kFTfotv9uFpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCxYxjj6XyEQsjELsFkPBwF3Vs5DmL7MqtPT6f3Da1XJqBjuZYpU1vHWqVTTzboFNft4TqvnjvBPNNPmexLTcW2",
  "key1": "5PJqDffbjwwrgktfVycJxQssW7LYyszh1n5c1yJDLDgbfQn41PyBAGKfAUVL5iwx4HZVvpwxPPACiVAE8sMtF6fW",
  "key2": "5ZdJagaxjFgsdMTPrVhjWXxKPSoo321fNijYdPw9gr4xQ2j5kbabVhoPdxfPhNe9QVYzQoZqLwLh1YrCB4HoLna2",
  "key3": "3vRtYsJsoBrt8qJ5pbu2bpmqLJxVnXDyZ1RVSA1QgHrGj5sP1CJUWwRB2rYLpbgk5nvReeRg2Y3gV86ZXrtT8YUJ",
  "key4": "2cew2AWaUEdzLMtjrnaTH4zykEKJ1g8jKTZ6n2b9H4jJFhy972WgNYhjweRNEdkJQaDjsKQMUNjKzgBg8saGJRtU",
  "key5": "5FQo3Z2hT73UvbE2wxv3ebqdCFFg4jn4PjYoqhdtc8oF2AJZPiL1R8fTktFw1FiFqLhqpwdMqZ3v31sgkjbkBC3X",
  "key6": "33rJrUWqk5qJjwjGd3yCWUDmYggoUYrpZbuUeegAkK1bGH2wyubQez5P4eHtUmooKL5TDr6wio7Tp8GESqqL2AeT",
  "key7": "2t6RLxzZJnmnw4jsBn63WXiZBqCGCeWf9KMSibYs2YeiMVCrc5Q3P5z27HhcLD28rTwX3vJnmTat274VmnBjwB96",
  "key8": "CaLbA2PZuVMC9EiP2gT9U9S7gKd1BpkS7RLWGSJsaLEeZ1piTHJF7apfbUTGMVYStisaP9zCG585yhubnS4cxN4",
  "key9": "4HVokwVLqds5o31c73q88Fn8iyDtmVwCzoogzoB7wsNZ1yk4zK7eE9BaWzfqwR8YhkQvvcwTz3ScjVvqvCZxspza",
  "key10": "5kkh7wsrQpF3d5r4vqz2AePNJuRgSDAM4iQzQ3iRuh12bvNyV4aFcgUVhWnpYSFuFZHBsTvrwe8dugrYDhVGaLqw",
  "key11": "4TdnYyegm5g4FWGhtfBk3gczzLvNNFK4mF2iDSVMRsMDXbrRVeqhwCgZbo7Poppxw2yVwMcpq4k4aasSxwq9QgZ2",
  "key12": "3p4HQPYrHfZSuGUsPLMy4ojh2CfsrmmnygEZ7KehbZA5o2EBscMYRuiYkv6cC3r1Qdzibx4BHrUZFp89RcvtGm7B",
  "key13": "3qJRXTin2qXeCrCf6pV5TGbbqHb5xKeJXHt4oSdxS56GDDBoEXMFcEPbjjvpQicLqinfSKSnX1AZuZzFhFHSwJZd",
  "key14": "3EwL9KucdYrcrvRxCRhSR3J87ZxvSUmGG6UPAbF7xFkLUdGSMd6B5hwBmUVWEdBRzGqbmRNEbmBKFU5RGj8GJUnP",
  "key15": "3MmL4r3Fp7ZyncVf3Gk8NnDozUUppfTiPbbCuDEZ4NdniAtsFXe5D22dQY4Z2YhmKfaZXCUeKEXDY93wgB7tKu9s",
  "key16": "27cwkhTBcFgtXFwtoVGhJvJfuguVRpHNAB34fyL1Vuuaa4rVT4yPCKtE22vWD4ZSEpdVJCj2Xq5u8vvgotTTPzAx",
  "key17": "3etLQWzVTYBxXQujPd2vzsnkeJC4pzzF41uDX9KbHabQP2ErSVUV58KtLeicrGCXUu14yotxxNGSAoNp8KBauHFg",
  "key18": "2JaR66EBS7XmrGrJKEiw9ZshSkiRHjn5BgTJfypBEugcxTTNPWJdSFPtG43u1wbbKgSCnmSnJP1NqcGRvzLknRGy",
  "key19": "2cHzz2v4TxajodaDADE74yjtBn6noepTzE8PsyLG3ymBhJA4PWQESHRmKL99QygkttZ7hrsMcwk6raA3rrZK1giw",
  "key20": "2PMtP2WYyCzDLdvzHYTtnqiVrRoctfKzrhDhdMUdsJ21qk5wFoWkRPacymo7G3joyAmo6hBZp2dehGaePMHmFQko",
  "key21": "5yHqLutX99qoATaW4DaSBWuqnt4zYd3Ju7ad9wGsZZk2Yy3DwJeFGeeZevpFh6sZJZzovFiBxuveqsY1Mn6muRLK",
  "key22": "3tHLe9TcbDytWB3RZZbdgXC77yQB7GUqEZvwtNFNcXMTtqh85AFdsWbzKsxqgr62acsT1aAgL12rAvPmc8EmRd29",
  "key23": "sPRTVT7yMLmrBqts7RTKteunwsdVEvhDj7WJ6kK9FDKDXYHmdsKgvZSVgQAAriWzmsZZgUasuJ6SjZqwt1qzKhg",
  "key24": "65YfSsvR1Aurte6sKGntDCb3nEDW2v2rFKmgrzpMiZhNixfd6toW4S1PqyQk28R3UG5oFHgJFjr3w6dR3yCjiqUy",
  "key25": "2qof3BRU6JEuzUMLfCEne7EMYjpR46jnYXyTzMZWUEXrF4WFWduscvxVj5eSxxnqAp5QUVVBmL4gnkPsMPXy3LaD",
  "key26": "4ARNT1vrvhYsbjw6Q2pGELAq7n1sKsBmu4Kbfdtx2wBdHnJ16DPBvQ4eAAnXjdCdnh84dK7bjKW1oxwRCEigxLEc",
  "key27": "5ZKZa6MHn5gVN7Z4QDQCbkz5HX4FWhxzv12Fw32Q7aV8mfMcvPLF2gRf25RuBnd7xnZMDo722YbspYx46sxevrca",
  "key28": "5pzNVC9GW5a9NxDFJbqkUQGFKWYwsZ3vqC3CdYMjL4SocLGy3S55KWqA5RpB5kWpvJvJZvtn18EpydrG3nGjVcxU",
  "key29": "47WDA9TViqHaEsSyBGFCXswz73CobJcpTwApCYkMikaKrR8FSSqc3vFZvafrngeF9QhvV8wJ7Zndh6gqYRoS3xnG",
  "key30": "48wrzSbUdaT9XQQHBW2Gjq8NsVEXTWPEeiFJ5LS4qPNfd5VkWAERdwAett2XjsGKQ3DsNnhVKe55UJs4PZESyeKB",
  "key31": "4wBt3w6CEvigp594xATXuPEcbAAqp7Rpb3wnY8699qs7Sjnq3Lfy4zW7TnNgzctw9niJnfnmAH4DoyXULjgc2aqT",
  "key32": "1hWvmien4E7A7gKGEdpsbLVZdtiuieYvtHnp8V5Mn9icERGXpmhoQ7ybrcw67FXZ2omhQLs7amgDg85uTndSj96",
  "key33": "2gfRn11bqbH8eR92hAxqc7GCoLBMjUQioTASSifSx7X72m92r69MB8faeZSKoUneDVQeoDDPzKvX3hHYzRvXG1mE",
  "key34": "4VmBmaBa7FhhD99qAPHxGjerVxqGeD8T15MhuYFwwxfTToYeT8kXUsjMNbkbayJWvQH3osnkP42zJJfcDUMTSixH",
  "key35": "2yP8PiGPDd2F887cLvdnXhnQULRXVUAfU8L1niU2XPDx2f9nLnPkimU66ns4S4krdUwYkTYdz9GGU5zu3HLs4o9B",
  "key36": "4ejeEMoBuTcKqEugpi6EfXQUcyYg3jrJCKm5xr5i6nRsSQzqSYYWoJqxxAfMhgT5GMpnHGmAWfjmCYaFwyqdm49c",
  "key37": "hCPnmaf5bovycQPjx9sS9JoEbot2pr8eEib2exn7gQV7Akdkic3t46TAFnMZXqaJaefoiamnXsYt4XMR6PoEkpS",
  "key38": "2wA6aLeTj6y5DJUyFL3yQ1KCrUDq94UAWBwCVCTkUx9dwRHNTKvPUmVUzYVUkeoRovsX5z1XqZw21fTkxA9jy66r",
  "key39": "3RPpyUQn8g47PwGgT4LQacAyXVbF6QqXsPJnt2nwvM3kmiCM6uYoirnpUFKy5bKxV3LMgyCE7MAefbnpehQZmafi",
  "key40": "2cZHQnDJGNzJMKhb1UML9PbM9bLH2VJTcuBk7vNFatjhkjkuCoK5hJP7ChssHHdCuzduWqLm8VsBqJ72NbZ3tG3C",
  "key41": "4jajinA6hxAXWVrumuLBdCj9BYgkgji9LRZCWztQZfDaUChonKs73sF2eUQmhsiA9w4herN7za7UVdov1eVY9C4i",
  "key42": "3YmyWRiniW1B6ZVLPXBDaqSDEEtNveTrzNzA5Z7djPRJX9brEx8ZhtY7TYoD5FUrJvG1X9abZtMxXPmtTjdbJimM",
  "key43": "eWNYaTgqrQ2nSHsKrW8ag3SqpNcV4QBAsXBmdH6EEuP6HCXijTbavT3znnFnRgcaU8R98yT2SvhzmfpTftj72vm",
  "key44": "3HU2rVr4EyCjTpWPHb4rVQFDF5iAxMHcwK25Fo2BcWYmRJ1j2ewM7vjTM4bpMLKspi5wcpFXfu9CGcGuzQpTjQAK"
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
