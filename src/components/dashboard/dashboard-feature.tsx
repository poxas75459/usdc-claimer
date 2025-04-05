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
    "2daXsGbNTgr4jN5BX9KL2X5ZQNww5ed78xtsouiBatTy5QkBVQLRCeARwmSeYWMLu1iPSxaVk1ZgNy695eXq8Egg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8H8sjMvAgteLqvxQS6Ko7ET3oTumS8zgP3VqVkmTbjUSdWsXq5oF6f16QiBh1x813b5FY73Ch9fJvREajUu3ar",
  "key1": "5FkkMQctTWDzuYw922PYBAPN67akpikRWBAsMSJasUEXig7QFBDLHpoL3io3abGi7NcMwTfdRoTCxkd7X9c7daqz",
  "key2": "5Cn2XHeS8jnB6j76W79Xh4jUdspngegavT5yaBxmrFcE8R7M3sXXk1YusQwcErFdc49XZh25jyuiDx7ZwHESDr9s",
  "key3": "56V9HDbzCtQpCNgpF2ENPWZTmQs2iAgZNTHww565tWyVBFnwhztZ6cXmoHVYViMeVbn4XSx1kafTZ5xRpUnNqFxA",
  "key4": "5RyuyTn1EqspSYfSurBbnvUKc6PEQ55unr11intDkiuYkbQd6KZAgAWufymuD7rmHvcGg6JGyPYqKEbaUMvJD1Wn",
  "key5": "421PEe7dbxhTPxgM8MF87WLVRyNamvR1cd1AsDyXaS5XdK53GQZ3sFtr91pxffbwDCDn5gqhP8LhsMU1p17DY5kx",
  "key6": "4W1EnEpGpwGG5G654NxDtYMvEsexyvops1TLAJhv3CwA5v4zb26wDexhEtBtG4cKaQESJp9XeKwsYaGyrAz1HiaL",
  "key7": "3oqZJvxTj8zErvKPfpYi2CgfbSxGWX4L58wapKZ18gECod7T4wLZWXK9MYufB7PaysYVuukUTyX45MeWztnyimXV",
  "key8": "4ih1jz2J9F9bWFJeHz6t8dJLh5Dr5XyappwoN7c6g78Rx2nhrsCY2inB74KCfvJ6ChwTVBgrMUVVf1rYujEM2SF8",
  "key9": "4vtPZhbbdf7pXKZtG6eVotHUMsJe1omppKqK7ApP6js2VtUVbYb693Y33gy2pVzr6uHm9bxEjQb5nquEYYvgNhNZ",
  "key10": "5yxfxWwbWouaLWaCUqR3cihtWfYKBFaro2NX7abuPMfvrvBksZuY79HmRhjZwfYrbSUDd3iuju6VQsGTbx9Xfk3r",
  "key11": "3M4zRQY5tdoL6oudvfHKauwjhcDmjoV8aA9BjBxoqgqgLpwgXRhcUfx3XjUdtS2QyG6534s38jTjGTUm4pSCv9z1",
  "key12": "66V3JogrCes5ANXtHvqBQZvxGHo6d35W6TRnattXXLTdQHe2cHvpGNZVZCJVkBBTex8rDmN6ZgHCoXsH4CMKStP9",
  "key13": "4DLjmyoVPCPuFRTMpbXrKFZYxbmmhUqaqkV2Wwrs8dgdJh5AryzTwvgLyMixojboFV73pme6vtpF6nGzfMQyDrUS",
  "key14": "3JnY4ut4fHwerd6aLDmb42pF7Jz6mt15T2hwT35ApQQk3LvgiKNHSARQCNjte8Pi9eSvxUvEcPof3JYd3T1nB8LL",
  "key15": "5UZe6AzzmoXCVmhCK6NmFefVJLMckTt8agGkfF3sc9MREDebdYbDfNn8siXsj6eyCJNnUE4RKyoo1zuXR6yZAGYD",
  "key16": "bzSqbxbJPsaNibhuvCtPTfqHDWCvU7e2mCCGYyuQwUCDwJgd7yqowonELy8UkBkphA6JM16czVQekEbpMUFQurx",
  "key17": "4PG3nZ2kXPGpPagigDEvAznfdwWU3DWVDGBoHhfQPK8aUA1B93HprYFESa2LDJWJqHQdJvcEnc6xShkGL6AmRGtz",
  "key18": "2pvPUGh3DMoUmVW6Rqxh6FT5447NLn7Ny1UA7VtMouraJcDE144QB2AM4hrhA8GbfDrYKGpEAdoqes3U3wNSANEB",
  "key19": "hSnd8ncRw2GjQHFadjgYkzQbxjyrT7fT74BWZqbHtyFWvFMPxqtvy5EDXVH9bVqczbC8tr2FNT8ywj7PFUzkqsA",
  "key20": "5BuoG7doqCc5BvWtf4eQKuZ1HGDCc4PyuJWJNkwxUsuynPCYDzHeWgM7G61BMbTra3eLRJ2NXsr3LaaHri22ehNC",
  "key21": "jtnecsqhs1Grwt6qcjZjX3XM2W3RBZDErGPqhNRQzxD5PuhK7fTWHfM82y44ReLHzeqTn2bLS2xjrsbUYxvVSty",
  "key22": "288Fpy7pigKMWVTuhLNepHmQcUJP3vggBkSSWPsFMBqTdqAsKaUsdNvhXUQjvLibWiVWzUQy1EBGWqYoPDCeRNpE",
  "key23": "5kJi8xtr6F5iZN4oq32UNFfRPhXXSZd4RAPvzwUCQoWZ2iMywzunnrh8zxkf8MKs7KV9iontGjuBG3yCJ7KuePoV",
  "key24": "2KXU5SYVAu6sC5H6gF5DqHG29QMzgrPhzmBjG2ipqdQVtvhuAHAqWNHHk8LAEfhVyb3CMASLLbmUR1cwdj45LAoW",
  "key25": "3neKiKZy43o7UtcEkS5CE3h4GD3Zgp3q4qmR4Km6hHxthm17eyecJhwPHCU1nQLLPWrtbFbtmhiETVnsFr2NrJKd",
  "key26": "2Ek64JQCFEcRXoJTKwu4C4LytxtaeF4NqKcTUsyYGXGstjbpR3dvDv5LhmWHYWM2QDVoRcXANbyVJ6m67J17e5Mu",
  "key27": "5yoQVN9R5ivdp5Hc22Jo14PCiSg5i5XsdbogdWM7QE7MnarN2g6gQti1VYeRGoVGdnDcmSTA5xid5Kpg94veRS94",
  "key28": "2mhPzdssBA8KbHS4gC2jcNdDmxb8c8BUHoKtq59EbW6JE2KmkFUDFacHqrpzrwwwUgjYWuQVAZyhSaDJsNYuwSHe",
  "key29": "HyMXzdcoDNKcgEiJLBiLL4Fk9FR1huvEvh5C9rr5MBdn5CMN38oo7MNeGKFb6M1aXioWNTMv3twhz5GwQx333q8",
  "key30": "XdiAzaoP5nHCfQBKpLFsKMz12LnpttCz3R9naQcUS7LBrUkYnWRcPfR1NvACqGnLMRKjw135R1ipSa12KcXAuUF",
  "key31": "4eVQvYLWUNdCEEj7dRDrFrp64mdqv9Y2kDsXhG3qsi7Zybre2MK6jYty63Zv5UG4LsR2ZRnTxSBCK9SsmhQTNS7",
  "key32": "4QEp6ujWm1UeuvNEWKceEegTRRFFCnAQ3xWL4F7fXztrzN81a3Rw69i3C7br4Zyqj3DwCbwJxuYQGjnoyrr7HziU",
  "key33": "3C4LFcJti28JJZMdtAhhQx2qYpKMWUFi1LUReDs7pG22BnjDM3KYcTWsgweHQkiLHNwfo1x74hCx6DdtQmcBkoa5",
  "key34": "5DzeV2tZv4BuzusMdVpMHpc1ri7sioReym8A7nAZXSwdxkajmdtAGK5kvF6CR9s4Jwt6smWyn2jxJvQqh55SjGcr",
  "key35": "euCC3GfpcazCsMdxyRoGiaSw2NKiWSajeioGd8gPfenkSSArFMiSby1t6RUL7Wgy1eenetH9uiyBBFhDCuUAQCS",
  "key36": "AVfRR4fpFCnoT8RdxyUmHGEjmEk2BwP4Vk6HmbWMejgHbardZx8sEiXiEAUGN9HwAmQ2uQqpHxCiQKsPdTHZdpP",
  "key37": "5BbsbyPvWpa1L5azog7HgtQKSafN9WGDX6pCJdqmoDh1BLPMFHexa5LTr38xRDuWsABgWtg4FQSBhXYSiwSWzTZP"
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
