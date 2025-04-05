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
    "4MzPMS7jpPpEEwdpos3xRpiJQZw6LPk3zuTa8ip5SFdgAob6zMhDdH3WcANE3csiTgWN9WNAC4VjSAJYeffttfjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yk19FpChZxHwNf4tggxHxCH2BWyPKeQSyw5ExHjCh5owSeuQZ2NjX7WSf6isPP4VoVrqDKBMacXBNEN6kG7ihJy",
  "key1": "teatsS7iCnN6NJeAjBfzR2vsEUbS2b5NAH46bEKfBVFjDWxyZvtVF6RhqjqkaSHQCkNyf64yXGgPdJXWWNaRAiP",
  "key2": "2KmUFk5qH2hVqUmsm3FaPSqsiEqTBPHE1v35DtYnuB93ApSidVEWeuEzdYRfBm1io4qU6wD4YYxLjBTdtVk2mPMv",
  "key3": "2u8Sq65QZ5JJzDaSzj1kXsJGN1xzRxuPQCXkW2y8r92vEEmPbyS4TYv2jebCpPQWNu4yYR2jqW3pozRhYYcbaM7J",
  "key4": "w4N5Pc8ZbhN75vxfhPnhxxrDLS4QxqQ9EKPCAuJxGfJagJRm5EXxeAy149DD8GtAcZGRXYSVSpTHQojqtZH5uTn",
  "key5": "4piwQugWsi8bHNrw6yZqqPnrn9rQw7E1FsXefjhHXuboGmLm8HaTLRhVGEFbHVjYsqFgTtvmUjJ7jqjE82kZJRAm",
  "key6": "23yoyFBaRc2GFtsDqbzKKhuU91H6r16jnQyK6FdpMExhetPR2AtdQmTG9ZcJGuEgFSGcKYCR2KjvXJq9Gp7MNMFE",
  "key7": "wbdkGX1M8cdxvzTpnXYW9sXSM3zWSbBEpUMocF8UkxCyJqJwETJescWFPJH3YCbd7KbcGjCMrm7g1naBbDb7rnR",
  "key8": "4vsmnQUvEKUFcdYs5S9sN1z6MYGSpam2QdWs8WEAtYsBuHkWozeZYF4zYe2ofyK6PYyiw8SvNkYDzGTiUWRVpmBf",
  "key9": "5JLdPMaS65dLoHuGrjfCruDggiLdF7xeUC6sJAtPLcSZ8D7ojHFXnxqzbKteQ8wv5BW85ybWgn2oiN1pKDdhW1zt",
  "key10": "32KvoqAsXfRvoZJ3BVUh4xyLyTs9xvWSZimHTSF6Uxz4oZVoQqsMaFXTsSXAV4tWs3iDLhdwNNoFPpc99dyiyDmf",
  "key11": "2MREsdrjFUSJmuPV4qP9i5Y9yz4nAQUYCSod6r6hTh7uPZh6YwZoQdy2RRUSshe65omHM4SRq54Hw6tcgbJi79ME",
  "key12": "3xjmBg3CEsYMaue6VcPVm98bQhX5Jnij6S9Y7RUfg1PoFBiVWxA7ZT1TyMB339R9UL9UpRjQRVBDqKgV1GX7r74a",
  "key13": "4hubpjiRrXZ9VYagNdfVeQQ7nkwrnJ1McvKgrEhjMPDbk9R7HKRJ85xDHp5N5xAS1en5eVRuRmfkqFkpmtq2RhGq",
  "key14": "3AJe9hvbo7HrsdGdtjV8sdYsXoFSJ4tyuJzTH8mkT4jgZdpDqAkyyqnRDSymZ82hS4Hym26chmkieFi5iEdGw6ny",
  "key15": "5HWr5t6R2ZYfy4iyqZ9mV4wxLx9GXUEu8BbfdnQFfwrykp1gP85Ka4a6vLVxz8GQxAdTjYRtUYed7cWjJLYZyw6g",
  "key16": "4pk3AdWdtZhoUiSdy7daqsCXrjeYnhSSYfcBhqgTEZS18WyLGkSSX7UW5r1CNBCpqn5dmrXCqS23RLYVBaQ8ANA7",
  "key17": "2GmGxRVk7EVe7aynRrYrVpkdvnNULMXkyfGQiwdFxGA7QgwyTQUxjCkk9DEK2LaoNC78nGGUd38REZECgx4NnRHW",
  "key18": "4fjRoyfVsxn9j7HTybYnFema6WrVbbZs31aBPhNAfVxKR9akLGA6k4Ts2GihyFfcJrBobbYCc6bsvFikH56oB2zH",
  "key19": "3BfAVPtMnW8ToSxTaPSXjZcbxpAra8PDC9FgyfmQeLYhb49QmKC69655ecSrUDVDcvsF23SUcYByagbrDYHo7hTJ",
  "key20": "5jKcVpAiy95AMxRxS2hLLLNXjYyrjav2qUNLfy1NvcdQ9Ay3HMLKNipy9zSSZp11Ri2sTqGUY3eFbrpvjCt4hvSR",
  "key21": "2jbKZcqnM8MMrCTrX3fNPeE8vUVXqMsdC7UCav4g9qrN5e3hCTjMM9wRh9iRWumEZpDbwwZFcGWzjk31HAa1TkYp",
  "key22": "3NRHrbHLSL4aRga96FwSB658JkWjWAAhMYnBGooUfAFSVVsMWNRe8KgDqfK4GT71FpwdXtD6KNYmuXwjrcPDtjhX",
  "key23": "ZWEciTbwnFcsWFgd9LQeGMQeES1JgknmbcW4sZWRG2qmcLk2VS4KsRk2HNZhMSkV6DShpBJU8nHzb4tSp6v1gyy",
  "key24": "27btKn1wKABiRLmCfgZpGYXAR4GWgBG8E8EKzyijkPyWpTyksrWDdWc9Bk2p52okf5uqvjFBBjzWH7VAzxAZjhs4",
  "key25": "5UDMfZqjEx4gtjGz7kVi9ko6JVM8Bu8MkBq1cFgAuoH7gRML6hY66kuf79H9SLBBwiYb7JcZaHUYpH3WUCqaJfkP",
  "key26": "46p4JXJVRw3LLLpsn8XVVQ2rES1nwULn3WyCaTk9eL98VuiAVwDE3vhAWWjKr4ezdKH4tdzKoH6LW1MCuAHebXkc",
  "key27": "4ojhmXC6uvt9kwEgv6gipSnCyJzimiA1hAerRjWNupvaboVYMS7V811bVBunS9asc9Yj14MTeG14RYTBuLbtX7mB",
  "key28": "64oSAnyAKN83BiXNSJzjBqDKgww59fSMPjx37Gcd2zoPUdQau62N97aMAALVnD4tLdPAKoGwgaw4f5TDZd1fXRnT",
  "key29": "2NjxY9vMKk2TKsifiNTjWwWSQCcxzzytKzdn2YefrFhxNtExxgBhpRYYvuX54BUZSgEKWFBHLXoyEpfLwx6pnpGT",
  "key30": "3yvQebvteKVk5cUgaaB9SUoo55c2HECsU3CKVM2jekqAYKtXE28dUV2Z7yCgZG7diFCgqcYkF3TwvFK4D7FKcwXV",
  "key31": "8R1AXUDsvymLMFJz6vTQW94sHKvv4n4oJjSWpgncyYwvTnYL6WeXsd1RKhQceGJpvsR13D4Jkys5B1kXzsNHhoX",
  "key32": "5cr8STq4REsEEbaRxxh1nQnsi4uimhNSWFttXGeWGiqKH3yCmsdZzeZRXZLRX5afLSVB9kQ6Pqfmc9FpKRP8KsXt",
  "key33": "2HSQYwSe7b5ysu5FJBTSN27iyMgSA9EDGdpyZmoHSdyP9BMPJCAWw6kWUTn88BsotedZpNn9xnKTd31usVNHhiGz",
  "key34": "3PPR5EE74hGtnZj8u1PUHaTMUWXbcDzzpuiYciQTrA4bMwDmrExE7VSEqYWzbwkddEA6rCwxC4ekTwQFs7EnmNJj",
  "key35": "5LBuBHQ2EJ38WTyPdPHvMoxMU9kvFKErexPJ9BYQ9auHRns7uYGMb21Lxcy8VWckY8gjPgG5uszdd8VehQ2UCrhL",
  "key36": "5R8WgeNPj51r7SdovVGhn65zHhWHA1gfRKf5hQQ2jyjjJmyqZLU4pfJKhszog63hPGkHPXbw1rtBRwHAeCTMwuLk",
  "key37": "41dk4CbuuUfNsART96SL12vPb1y2NWnaRMz7SrxersrtJsi1PHdXQBLXZFZUWcWhoG4M7cVjduez6FypRqqavUet",
  "key38": "5LBc5ChDDw8vmFChmtEnhFbmFjLDt3obf6veYX7S9hp95X66gttMx4psg49N4jTvkjGup8NUMcNrBNmW3pigACp1",
  "key39": "jkaLhhzUFAiJgWxNccz2FuhPL2RAovHoYKASM6a4CHm71xpFKfeQXSKjBKQp8PjDGjdfc7LKuNMLsSi8X3xuxFR",
  "key40": "SsQQrBeitnFxgKbt72GQ3z2kPkNPYeRXc9Nnt1ZYgzARSskixQwvZgkdHDFnqKyFowdELohPNYPavFvq2xGNcMz",
  "key41": "t7bzuFfotJWFfonyziJE9jgDJEPFQya3MrzG75ASM4qqMvacGXR1eekWD67r9fQrP1ZnnCsfybVy9kmVec57gHf",
  "key42": "5stzXzg1ecUBhXR5yLYWUfG4hC6ZCQ3gy7daFKDPewZ4DYv93EYhyfweii4YcFxD6JNRV2goMpC2mVFu62TDoE6o",
  "key43": "5paeqofs3BXmv6GeX5GFagxh3SXDm44YWNU6ZbWnoTJURCd6GdoVk63byHPhfbQtyZqmh5LmmBHJjbYcGgQJDnGA",
  "key44": "2Go8MDynZV9Aqb2Ng5ctgRk76Lkw9bdxDine4kpNXAKvzSh8DhD2tbvfKK9En5tpsLF4zXxH89RdsCBWrUkMAU7U"
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
