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
    "3ACrnV9AE6KpW5LVkM1m1gLBQrZcKfAyKGouHaJ6KwzgyGugENm66Dx2gkPsVp5xM49nG5SiN83P9F8QDRGrsTBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZmELTUm9H8ZqtERWMorWRGh8qkA42Sbxbmp6sx28PvcKDBNNC6VL2LStxLgJZFzaZQUEKBNX47jZEi1hHuX7d1y",
  "key1": "5g9u8aLdwTQeFMZ6PB5jA8v7B69KaQrn2gB69Pbmwx6zxRnMoZncatvJf3EyHi15DDhP8NosZ9oGxBi8kx6ge8gM",
  "key2": "5LaPHgTp7zqecLJpL2i528FJv8NvNrPGTKd1mCxhxFRGYvaxRXY7yAA5wurFie5SvSTLrqRLb96rX7SEqN7GDj7C",
  "key3": "dcCtwfkrdH9NwQJR7GVfb9CMCgKu2wUqM2wWegcR67SMZzv8BKPxzocrqJfmDbmuopiLQbTgPzFjYSCMHLme1te",
  "key4": "5Xrkq2BeiTdZ26ue9NC5VxSx9s6TKa21dPTW7owdZEPz9aSFZTbm3CduxCqSkbrjcxwr9qqvRWsWVYkACC5Y39M6",
  "key5": "58a1GH2DNhqN9khMDREbHG2Yg8tCCKx3f8c7btGvuuFWdpUZE2inKa2BuDE6NpB2itKvV3gvka5F3514av6ZDg2J",
  "key6": "5E2eufJ8kBdwrKCoCX8mqquNJNwvNBGMDPz1pr4m241jBwGUvwuhUMruekFxwSURUg737wYdQ363ubRPWzFC3sda",
  "key7": "3sEDu5G1sfh5ZtRs125esPHaZLitc6TwZR92L6ezyJgrDRAp8mWm7wbwrRCvGeHJmGWGFNWZBqTr6EmMJMCBXRWL",
  "key8": "4eNvGJqYA2r5rvQ9DZUnMBk5CRqAKETgcUCnvhQiXkiTohyzwNkEbmqPVcZfdqZuXG6hVLrmp847VRZnvsGvFtU2",
  "key9": "4j1gAKrXZa4jerM116x67ZN4w8Xh2ASskq8c198yJYYnhcGvAXDwzoB4WAafXpcnA25nEEyHciihSdipd6z7tEnA",
  "key10": "5xGW2h8QAwCvYWZfBAHrTn4HgWmeuRFxPKxfSfbx3kFiqQshQmxPY2RbN9gU82omhPUzKdPCMJscczcWSLn2wT8C",
  "key11": "5UBU21ebMyMcSV4MfaUtZtTdtP3AGP7bULuauupvAC9NKK2LUAvwbJHtdodGDVXMRHtXJfds7XjgCNrVjDkUrLoy",
  "key12": "4aGAr88qioAGKpG8oqDE6X4w9NWU5KLgssDyWYfm2rGetKwgQqprF5g9Yo1fX1HXmgQBnaKLFN4CsNJzme4kksPz",
  "key13": "23BdbF9gJUe8c4giguzUHEQF4JLev2Hp5LJmVGcrr94Zvgpx34wjT1KoC2hZDGgisDVNnoxTS1JWRstAtbtZLgeo",
  "key14": "3qqyazG1XtHom5cBA4yxbGAFRB9qV5FxR4b2mcw5MTo7z9fTVefTGdf4GbFk9pfMof4f75U3khFkPtMLC9CFs68b",
  "key15": "62Aj1mhkTKbB2hcooWyZXd6dDV7XJFXq1dFcfwQEagmakib4KEhkctG228rXDQ4cbkh6ZzsbaKAcJTXn2U4ui9v4",
  "key16": "4pH18kRZRahbKZ3HYu5VyUDBJqhPo1BxkehAwJQWhaM5DJTZWMnLrHfPuL867J7F7qY9fgX6poDtb7TQFUKDXrvL",
  "key17": "vFA3EvYwV3YtT8b3cuWfej4QpxnU4eD5QqxHjtiXKkKRLFZQWFaquCzkuj12dzaAAryxjPLewWnyM89kg27HhRN",
  "key18": "66d9CJEcbYYLkZ84MhgQCDLJYMiuFPMyjx2AroLhPw9hKJncTEVRMzvaDG8bXfcyTaeHjMk6K8fvFwmLjbw7f6HK",
  "key19": "2GzVc136vVDDGg4WB4nGszGBLvQ2ZGq9N9U86rp7fsppcmZ79Ne9xhNFy2pcDifrWMiHzdXeAPp5jWegZxBtLwZR",
  "key20": "3QxgwzGQHhvkMdx4rcu4LGsEvAZhLajZ5csfWmtNsEwfWrxdhttjbkb1SCZ5jEBfJwy7M6bBn5XmtxUY1Z6wXk87",
  "key21": "5gtbmy7jhnhgJcs9xnPUdvHthJeQ2e17tfBmjkAiE5LHFsH78jpvjF3eYBG7Rb9BFJRg8YQFQ2JBWya9U1BAbFc1",
  "key22": "5j1HD2csjnCPjHpHwUn9CTpZ93N7nGuqPNTVKCULQUabWsQHGJnHMy3NkAB3bRrM233Uh9pJkRjPPLBsv5RhooHt",
  "key23": "jkMCFcLQorGLWXLhrWNLTgej8Gf1ewkjUHn4AkW1dbWZp8qvACmf6yoGZLdLtjeRusMMuhakpMpU1BziXCT5VXY",
  "key24": "3T8hVZWp7JB2HCsooMUnaXwkaq5s3EcyUsWfji6pBo3811WyQUA8PYYkAfBK3Gqb69rQUj6MSpYG6BzuscanhRze",
  "key25": "2RAHFTfkuqubVwMwS5pJ5ycikgCxB856aBodL3UXfmJwvg82PHKVWrrPrswuXPitZmArcu88wqiRLtC3hiAtSJMd",
  "key26": "5tcDdbdPigx3ZGiWZKhHmtijhrJ2qSgBdDqesthx3GJqdU5AVevxW1VwHYMfXtVgBJBQdy4YqgypJe5QDmfXZCMx",
  "key27": "4CTpX9GweWuCT5nK537w5Cx8bm4jMA3vaMV4EfN8Dh5vE4Sf1T394uY5eaEFXqR9HqoKgmP7e16GX8dh5xyzJZqL",
  "key28": "1pCsLwtMzyWDiRhAUQENPvYcJAfMV6hCDTKTDfQp4H13W8ZJjYmBPVUhfWD51wbj6r1ha9jJqS6LJazKKNYEBEy",
  "key29": "e3b5MepDmNhUziRgSknKnaA4Pv72LHgLpmLSrPq3uY1NuATx2AcEpq2izTjYSBSLVmqcp5sQptcgUzRj8MhTvik",
  "key30": "34VBCLiZpFaDwFNMw8uxjLY76VkSRiAtCCijebnYLaZp7XDThu45juWkVsCdGnqQ2tyA93zwg5kXxxLdZgzYiiCs",
  "key31": "rcBYc5tiMCEksar13BtHDSVDqXzvUFDAZuHRKb1txhGp1hZbyNoviF4Yb7TJiTcTnxJVF35zEiVK4pc1gJmav43",
  "key32": "3xD5uNhwuJw5EXMaK97gYrt2MjQm58SzReY5cTde3sHTeRwM1De2gZCtMxfqvHBAuEChocS9mNx3GG2hn8h7TteH",
  "key33": "2hFgRykZaMaTyGvRC2hdgu7GQf6Qu8YH2MAdrYhn9t4fhygX4iVnsvHZaeBYQsG7j5Fz3xy3g4hmDCiHMqNBK1d8",
  "key34": "bBswtiXvKH78nzcDbg7b2KVmiQnBbtDgzu6Zb9vCoynWFxfHFsvKScdQmocivSboS5AK3MwapmkxFeopaCwG2WQ",
  "key35": "Q2MtXKXhzAdqYDGpr8ZeKjkMWMV74sfbZnL2bzhMA9FhFcmJDerYSKXghyVYjHXfZrXRFPqfcoRnc8y2kT78puZ",
  "key36": "ynpsvet8CGkyZixjLvTLxAA6uFo7N7hswuBNUJN5UVh45jrcHPRduexkmtjVrDfnaoA68eSNtHha6k5fBYiNint",
  "key37": "cyNknWm4RikEFpNvhg1Do18GUZQgGtJbg86a4ga5VzJJ4JJKSTTYZaQ6CkhuCRBV2q8iwMuxxRcrx3EuBPQZHco",
  "key38": "aZ8mcGE8cwXcD364Sv56wTJxxxh2c4FQTvFRyZuoPXUEMYyLgBKtCThDNtgdejco6N9SvX3M6fbcwpYH9gzyfge",
  "key39": "3c8PR5vhH659wsxet8xmjgVkWc6u5StT6oDiWxYHTfG8cvdLMP8jzjrvLBqbrqhc9M6zyiBAZKe4wJvA9zm3STcN",
  "key40": "3JuiHVDVfWS19QoChBYp6jxi3btsU86WAyvT9BaugLJRv58YF5knipbWkegeWjEDXAevXDShXZE6mrRMAmXM3EL3",
  "key41": "4puU35mAj6GbzUA3U8pHbY39T5utqwut3ykvgqyFiVWACD8drhA2CuYLrJzSDhqceAMR1F4ouBSyUDxpe9CcmQxt",
  "key42": "x9uHVSFdYSYDNPxVyiKstQWa3fVTtR3pAMPbJuvtUFS9AREYBTEUTM6F2UfnD6ZU6H8BhEbC6jscouBUAT4spbf",
  "key43": "4nzNfGH3cVWe7MziKZqoyvNPzTmhvEtyz8NST5h1p3ER2RnDfAeSgGQrxdWoFs8zYcRTcvCwtybnib55pr3fsVdx",
  "key44": "3Mnq2t4Tx6SrvVfsJDumVXxqCF6LWFGcmhcpWrnM815mepcwttYXLuyDZcSebGs2gjWYoKfQ2JL5sT9tPc9LzYAL",
  "key45": "4wiWmcuBQYCgh2me7kzPTm6Qg45gaF31uXPPoi8mD34frAUeQBYcZ447WUfATWufsdmBJ12ZDGmKtqCK3qoUEEBe",
  "key46": "4mHdTVBrtpyGvL9Y5V9TbCGwnV9snFG3e2at2QYM7T7znPKXdMsnHDEeN7NRvC1txoWzu5Hc7tLr21tDEduDQucq",
  "key47": "3x1SyT6Je6vLuS775QcURiHDcnjNPhRa3FnJ77ruA4s2YqrFzkE7WESV5RBvN5LsBQGpXxf1vQ5cdqbBGeHYjHRd",
  "key48": "2jrQVKuC7rKUoeBtnbqX8de2GEsanh3kJ316c8x682iunngUmxZ8ME5vJ1kegbZg53qWVPbmDwGbSjfbsSazWqxQ",
  "key49": "5omMhSuaqrBYCHPTfGTKkgJuez2xX8rECNu1bmudwMa6qGrZfxyfopUwUH44ED5RdP957quUPMEHVz3PHAatSwjG"
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
