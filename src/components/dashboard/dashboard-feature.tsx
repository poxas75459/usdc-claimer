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
    "x8QtKKLw1UjxM6H3jzfCiCpVts5Q7eK85McPLSZmW4wMjuh6NDHr6RvkSuEx7UzyVrY3cASCZRCSax7cPbqQJaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhdZygTgKA1b2qG7Fe5KzFf3FZj8tAtE4ZEqHZ7x15XT83x7HUYQ64a1XdUsUhUGNfBPWPLccaYLEKqxvKNWipD",
  "key1": "vk34akxdR3bReaRUF5xGLvMCXWFusmC56hAVKfbFgtQbiL5k5cjPwu83MTDBKhxNKAiyutBi5pBuosaTNKUsvZr",
  "key2": "3idUmhzne6rSF7gUVjzx2u9eTY5YWwgviUfGikqzLtp9ntEBWdF5LFGtWkaZZtWvAYXn3TnyyTQ3cTangUMESKZe",
  "key3": "5y12PS8s5JPLnixiBRFSUSJ8iGCZ6iicwYzhwLFSZdVVJT33kQgi1tZgTFyDWfobKsHQ2xGMvadnjqhSxD2SA41z",
  "key4": "LkZfagBHQVPgbXeVSA5i8CLn9NxRNxWLeT8iswp4GWwxGMxHpHTCwLcdEe9g84jRqJh4kvRM5QFeRdBKqvJsgVd",
  "key5": "AWjToTxYRJAvbUNYeZsUJGVBZ4d4b8ZDNBKwYchnW3xP6ic2wSVSh3kRFkwJK8WtWJ5AiRWkpqnDff98JeHZrYv",
  "key6": "5mrZk7BxVGW7CMJBcbVpXdie8pHN43DhVdn9qjvWxKHcyYexTe15vQokAao4DHroBVMhQmLSRp5wShW3k7Drwq5B",
  "key7": "5H3uRVD2jCtZjRoAnKjqHEM8g8D3Lqi9qEmUUXCS5KcARg2jEERPqVLrwf3WLP7uufwKGWDTJgocRnCPgSaSoPaE",
  "key8": "CWk9ezn6bs8vmAYAa4wpp3BCpf2iMJsujSyqAYmAyqqXiUmAxHDJwv9rdnHbiYWdwTMDWKJhAZF6ipRDR7tdWax",
  "key9": "5zzzT618Gacohh1WFvmN6jemeb22bKBik6NEhrAy7CoWHFCVvaYGwMAfr7AJV2iaM5u84ycQcqh6T6cuLyPTQMqC",
  "key10": "38qvWZ8vojSYzZGhcHsv9jnFA341QCPFWuq58uzS5zjkEz4aA9dMESjZo31snnMZivnrZR67gyJTGrrbLcRD6qpi",
  "key11": "PpXCpGZ1GyxHULfg5Uoh2AJjLuNZE1QKvB9Hfqfi93CDY5YwGQWTP8urZrpUB9bmLnXbhKLmYVk36Ju5pT3X769",
  "key12": "5ygdt4KWv9JY2CRebgEgxCQ4KEz2kKnw89RtpTiE1vSDb7sfBq4ZgDcKDjjU2ficCnKmZcnqzLAgrqAyY1hAVjce",
  "key13": "5djDoBMgxzHtgzzwrHaBQGTYi51BoYswgskjaY5zFoJcbxGTpNr9Gr8YapLKHNcd7KaMVj7obPv9FHnZCR7XVfFU",
  "key14": "ibUXiRDTy8NvMKq5vJ83AsqTN64WLen9fxAUB8oufw1Wm7sGPhFLKc6ceiruZveRm27U6D8kpnZdpiT73Hursnx",
  "key15": "2rFLtNgAABkkov9b3riYGBZUHxRdnhLmB99H9V5CC1GnHdKXoKHtsceGH9ug54rGHqqJqLLiQfaM1oyjnY8xNEBo",
  "key16": "5Dhah1wL79TLxiwMnK7UeNM6TScxyJJ3NgEX8eb7zb337RV4DfdcJxoySPoxy5fiTMWR3odpJvFWtzbCSXPEsPRu",
  "key17": "v1wVSpKSL8JdHeHDr6idQ6YRkBrsCESvnTZhmNx1W6DtvDWAnAGLmh8Fciskw7ktNNaVSeZjzyfvNgkUT3Autzd",
  "key18": "3RnPKp1Pc5Z9KCxEPpS8Mn5jwJFg3C8vY5vCX6pp9jibnXGiwWG9yrgWjRR9WtU73KRJPj1Udvf6YEp2em6ihhLr",
  "key19": "2LJwKjeHt6nXsrN1CCDyx4yzomGYRSx6M6Hvwz6HzoaDGExM5EpTMKjf68XKZr22YYVcXibpiWvRsf4P2xxyxMQ8",
  "key20": "5TS4qXbAZ8ijpqho3FfmgegEM4ihWRPbB6itaW5DVDavhSypC71QvEJ3eHoWBiRJwbWQ6Y7YMXuxz1uTXWmSe3Ra",
  "key21": "67QS8XXYv4x7YxsnWgHpYuCASje9NkZzMujbpXaETytf5kB2PEbGb8nsAa3yZmHLwESsQRuBZMkJXEFR4LkA5Ugp",
  "key22": "3FF4Q61zuS4VpAGFWgPieEAuh12AUQDL5k2uF7Dym4QDuF8n3GKQELenFJ8pBUuMuE85WpRqXrwzhY6zJtDo7Kns",
  "key23": "2a4JBRmSwajiA4DqzjsRRYc7zQzH89WW4N2o1WM1zN72BvBuRjg6ZFDcH7qWbMyFtNUpf466K4GGNkqfkf4doSt9",
  "key24": "3aGVPzRbNNsYsN676Q1wrXSoJjZsJB4a52ieUkEakj9sHotjJ9t7HHAusRh5ZkLPK4a5SgzWvHJJk9BPpMZKs4es",
  "key25": "2isFynewQbdChs8nK6MPXHkbCaNsRPSohZiVxakujEQA25yh7VT48m477SvogpXCGMnmhC42eJWHrmVSkL9GLmVx",
  "key26": "4GVB9H9FGPaDqQR81jYyXnvEGyQycLrqKwhi5iWibWScR8GAzf16x7ZERUitjt7UktT8KZCPaZDfVtfAW1gAw3sx",
  "key27": "412PwYSMqxm6dGUYpLv33wYiiUR3jpjw4SDgShu4SQzSfgHPsbUKTfNPK16CK8PurTQqyvccsNXi8JT9imkQoEvN",
  "key28": "5wDH8vJXJB4eCHNfWnTQYR8qbnNGvGTRdezrSqUnvKtARApKSPxT3sPDqdjtJSfcSVrf8vBqMLkJaUrX1YZX63dw",
  "key29": "4bShZLBa3LcY1eDNoAibgcJLJaDbXjDoDTz3JZqGhRA3nXjBKRqJ5XcYvNQMakvvKoWfSebZwHzmSLLtAQdZVprE",
  "key30": "4wALkKZuXivfZzPN4MJ6H72vc7mqZ9B1rFxxsFpK6wmz64jqSi6svFsSGpPosaquWvzZgvbjAZtrpS26P2qbLuYH",
  "key31": "5kssFNnn4SpmxtegeokhpAw2esdRXVu4TjaEmTP1B9kUUxNVkZDYDNe5VEnQ5WL5YH8GHMMdqXhBYcVRUp9EEAdR",
  "key32": "4Mk2iUnELsnnCnWP16iN5RLopMRQMgnWpTV35k6AiCiLDZ2MTvZUw4fscpWeNAYrnzTe5FmHkekSWcWWtXDv1j25",
  "key33": "45cMEdihc3ajQqLz1jSGAeCS55dwPpih9rGHDMt92zNyVuP34AFXFxJcQeyFrP8jot4u2VU7UxNKL8XBKNc25X9M",
  "key34": "4wdssL3hYFcfVWptZCWCLqDtGSGjhBDSF14LgJonhbker83Ckxe3ZYuQs8EL8kcuyissjYVvNtiHRGaynxbu1zy3",
  "key35": "5Q7P3QnoCu4wH5fQJ9M2ymekWYmZtExDDnBenm8ihrjVNubhAYMz9YppQdMhmj4FtsoNqRWPANxUj69QeYgS2UqC",
  "key36": "4f75HQtJ8rhJ6TDcZ9voEYsiL2AMHWkgAaHaH7B8Qz72E7XHtQkeNaQ6bExbYCH3nMu8ocRFHEKhEatfbeujyVmY",
  "key37": "3UjwAKCH8ek3RhWHekhWetHcn8rYuFpL5gsgn7vGtttyFWucW4kipvXANEdjLCEHgzg8Hm3i5sg2EMvsXHJf37iL",
  "key38": "3jkPqjDQh4Ekbi8dRbJ7zx9STLvFc4RoLnHtUVurXgT2Xj7CwBHTYHXFV5ZaKDXpG1g5rPg1ZK9Tp4nuo2iZQksw",
  "key39": "3zpqWZNNEn8KHwBHA9THvtmKZgNWrfh7Z9EuejMyyGNosYZRw9CjEJBe8LHvhAY7U7iSSJx9bc3Yvex9RAHsTKBT",
  "key40": "JdAGtyUuGCXxW57fPkVZwnS6NcZA2mXbUkynvwbPvSU3KpJNtfpUrZMvu8RUVuKm14NRNnTvDVczQZxGEHeKeVe",
  "key41": "5V5YR85zRoo3BiZLC3FiePmfNrbYgaDV7CKArEbvKkLHViq5nXjz3h3wkUWWPYpkgvxG4cRmxiktishTHGMeSqEC",
  "key42": "GrahJN1FMmAzfvCrDPC1T4im4cQ9DVNXsPsf3o5ojJATteDrVCNuCHKakYeoZJ58Mjqrxt24RVFSAtZ8wWcdvCY",
  "key43": "e43LFBqooBtnpv7pnZFYx4H8XaH62ND2aLpA8dD8oa4ThAGf8fPDHaW8BgwTepL9DU7wKhbBJ4aYKsqm7CxnJuw",
  "key44": "odJMiGd6WN2SErPqZB3fc8hHu6Cv34SaS9ogMVdM1VoaforSogcZ5DXCvyoF1Qt1n2AA6y9ruVY6hm6GMArXybi",
  "key45": "3mt62LTtKca1oUVJHp9p6zs4do4u7ixYBT1swxLsFBAtfL8VViKkcQP3if5Hoh93MbDJSEpDMFfHnkaRtukkuzQL"
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
