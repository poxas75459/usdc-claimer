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
    "2Gu1NLfxkVqZETEGUeoUCeshsDWTdM9knQ4BzndXQU2bxGiQuKgLyKvTtBRAdS5YZCk2jesPBNiVEtDG17tPDEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QXSRtjm1fhWrvTzmqJXd7x9jDG1nCgxBFeS7eNLMTEVySDMNunM4AvfQzdpkcYks7RMWJyUJnd27NN7BqLVMwL",
  "key1": "2M18jZ8G5j5AqBkfxKwTM2GjbCdMnUHK1Eom1rtL1ybYh8uU4BxgWFH27LT2AETQPV22BnuKr2wiUuoh55yYz5se",
  "key2": "65k1Nvv9HP7YbQVUSSEZQ943fzky9cbaECMPcoP4LvyjUScdFAcpfo8udBEFrFkmTXgBC1mhvyFk4LHAR3WRSDHn",
  "key3": "4iB61zogCdYdrdVYbBBATYYmBotBrjR2kCtGUCPTiNNWSzgP4BFMRaF6C3GTyGKyoQsYSHL2cLGZTe13TKMZxgPc",
  "key4": "66AoizHoDiJFkQXPeRcaTg9wxc91czpVFn6RWQgwdHkBBaJ9hQvwCJdwTppdPjXWMpmpEmB8fwjNjD4GySejcPP6",
  "key5": "2faBADaT7q2syXZLCZdZkeqvtUnMie12qp6yu1ak4gHFHM5LvtmtbNtbSGv8N8xU1JSGFYuonFKnPXwSkYCU3HUP",
  "key6": "2w6TMr4rtz6NWoxMD2oBveMPWtPrvzssGjJWEot6gF3No21MAMxaun65LRKdDCx4rAMFckYRrxU1KEhdMccqybzy",
  "key7": "3xHHUq1Uz3UpM738ho8ErB2DvV2ppBFo4itSJiCm2yG4aFZfKcjXBngprh9rjjepzBm5svH2prHF1KeuCYNZn7ju",
  "key8": "5fknXMahF5AzM2fCb45gSQ7JDMGV5Bh6BVsmFnhn75GXghXRhRFEZXNpM7dDQngUXuPTwJicMLEFqWadKyYFdsbS",
  "key9": "6EEtrjpDtkeC4mhSiHsAJ6rjE6pVzuXJuLZiPXojeg6J8uzY4efE98qufLWDby9qShmzD5MZdoSKsCZAw2VbhcS",
  "key10": "5YmNHKy4ZQv9iz3Jimc33WcNG5482MByF36m7b8HmkKq8wMv3LKAqUVX1rj8mUEN585zx3RWLCUpRhcyZBrkNvEE",
  "key11": "3VKpuLuwDWBDcSMhtU3EpaPGKD5HR6RpqJ1Fk3TJfCfPoGbYxu83tEhwfgYxwxJPA63YnhtfJtwN4ZXjNwLQqg1r",
  "key12": "4nTsV7TyjdkwksowZxV3woHVz6EWzhXuYvLFZD3QanUPpatsQ6DMQ5vwpB1DvXWJMfQQqLoNojVqqW68k2Q8vkx3",
  "key13": "28XK2sgquH95GXhDjCJQ98i7gn3xT3KwyvL2BopQKAEBX9i76esD6jyK7QnuDdqEzvGzdspugm3ntiVPU9eUyXdb",
  "key14": "5GKPmcKZACoEuiuXEPWnhfU5AN8XDky43xJM1LHRwjDjxQPaiLnt2DqWd9N4MUaLWQJaFuVWj7vgShccuNhHbdTJ",
  "key15": "MzPxuUG5g8VPuzVMfZjoKAhVxKukhKyck2FubMD9UzBE5xsPPdFPNqxFu7CJBb6LqTTyvqP2p7Jp9Vgeor1kVM4",
  "key16": "4daKdfqq3HMhSNdKaHJ9CWRj6FBDTyMuDJDAM7zHVdAsjNk4RPACxtEDhwbyBNi3t2b8PxYsdo4VUqvoFd5Zevr2",
  "key17": "2yQErSuaCvqqq9LvhmU59qVBqbUQ8JRuPnrMo16uzfeNZYZ2ca9cAc6nhb7ce8uaN7wCFgeN8Jj53v9eBsK6tMKA",
  "key18": "3LkHLj1pZ1JqNqV4Mr7nANXVuDYTuZn7K8Gx1nrDaKKv341w57rqebeF4nEVCx3btzVNsgZvpjgy8epXcrgmgSFh",
  "key19": "5QtLAytT4kamLR9Xb5S2ZWpKyYhN24cfbUmm9TBap7wNPxpuDS2tqxyexrWtwENRn3uWoTjUSAud17CTRfjue7dW",
  "key20": "wmKHBGEaZBdyJHjq3aebntCqDkFmpzPbmufS4go2B9aE3xHe69zia4r6aJgnqf1j66uAeXn2VMUKVXRhrbuv2t8",
  "key21": "5JTfa3MRBKsSftGSmR43rj8YAFZtZGdUm1tdcQ8FuPGmM1H6QbPVLQJ92ZbK9Q5r8jSFUjE4cj7TRN9DH8JdUGj4",
  "key22": "5xitkrCtzdTHb7ZEboFdZ9Mi5dAXw3CKWweEEfnSQfxNoXoF4cqd5x8wE3pF5jR8RfK9k42FtBHcA9x59Ctbete8",
  "key23": "9rxK7SPKDzxqZ12VbpihowRGjqGS9XGqQUpzEBMhC3fbA717RyMiABGvWDTZ3gt3ty2udZ44XA31fBRKR9WFpNR",
  "key24": "62S44DQjrJdFecuAZ2CKB464pJCSuTuJTGDFUGVnyHcjmhJ8W6r4f9gbyEk58zjw4ZtqP7cvFGmnX5FLuiud4Vty",
  "key25": "45jcT7EsgFAWArusq7muZn7pM1z3P5kpXXUfQ38zY9TWStX2Ajn2JYjGyh9jtuPUk2ZMvb4v4PrRyjUHQvxsiwVa",
  "key26": "2G9Ea2mzFPEUTWn4nPBoi4UnsFXXF7aijiVeGWivjo4M75oRN3vsTNhjAjq5H4Ru786fVh3r87n99u541keQJbNB",
  "key27": "2KowCAEHEs93uh1fwC3d2KkRxaKWdNJHYnL6VnsA6qja4b5xaB8LnEkyjGCjXXa8Ean61hq4Nu3beeb2GGTHwX4P",
  "key28": "5dMqrEcmZXhv5cZYebiHUqFmK4vi88pZUktmrTRcd6gybP7RpFhSwXGj2YxAyPoVxTjDAPzrHBHpEhYZRu84i6jN",
  "key29": "2b22gQxn3v7jy5sSayqWQYFkHKdUHWCydwZit3ERNGavvpkymKn5kjphfjKz9at38pKscbnBc6kYihP67sA8nLQ7",
  "key30": "3dwa5ueKnKC7eZLBHYc6FX68J1evHMSJf2DYyXqfXTA4Fw6anFxbGYd8keEfYiN1NhFjA4wgquGH7xDoeK1qL3oC",
  "key31": "5o9qfSfNQHZKHYySzwmAMu7yar3BzkEmSkvJNztCti5NBvNMvJ9V9v9NjvAc9pRDjdHyYxBkVLdwccKoRVvmTFDm",
  "key32": "4Put1zbnqwMJemttDaQnm2Kq2EtwuhQZPtx9LwC5ua9hJsNZvTntsdjwJaBEhS39GeRGPpKS2NBy8HcWjTBfjttp",
  "key33": "37754QXXVVJZzcrDLrj4oeo2w4ntQPFKgsQRxjceJKCCSMKkWD6E8VbfJNn3VjdpHDGEbpsLSe9vF9LKGBxYih7B",
  "key34": "62fMSKa1xJQvY5PfadbpLMyWY1wkrPutEAtU7ztndtj3sQvCW6A3CSKALQ43JPo5bf5gXvi3wcRhmSEVJWTpUebp",
  "key35": "4Q4onNVWZfjSnqsnJeu9W8afPf9pd85YUhqbsU8Kmvs5U7dQyAKsHbjo6wX5TT53HYFULVDHBEm1KX6rLnA5A37n",
  "key36": "3foAeLA7skWGzkXU72jafMSeUnojxtKn88AEzNysZEahFLLyD355SpiunPxASrzwqrFPksEEp8CvMoL3Aw4QCsdj",
  "key37": "HNnpVEYwQE4t77brCiDm6CwmJ4dieF4LwRyjZKDGq1uY9JccJK81vrECCxx7SdFFSHqpwEkwcM4nnKzDKBa1Xae",
  "key38": "C595wgBDXUHc2xUjvFNsQEKs7yTzEUactALQjxbU12GgzPTLGmHQumXG5igW1CjGKqV2Wk6drEU4wdeooL5Rsyu",
  "key39": "4gaZgsVjcUSLKTjrRrFWgT2NbepQ3ckeBoUETTVDvCce29sRT8ZdJyaXcnzyh4VATfhq1YDcJWJ5EHEqDfFFW4aA",
  "key40": "5FfBWgr4Msb3icpUFoYidRfoLnkzpwXzYvqkU7b2TK8L262YrNdko6eNW2QBEF8jGd2Cf6wbNhsAp9NsfwcFdniV",
  "key41": "4pPKvVh3X4Vgt64C71PBCJ6L8fohogYqptbkKujdwLbxA2Zx8jxpvACYvTNHiqyVYc9wsYMwZfQFaVyH3PxEjG5w",
  "key42": "qDRiMh6uTeEzrhGPa4XgZbDnbjXLZDsM7Np6gjsWVZ8T5ine9W7hdvkqprDBA5j5fHBZXp3DxWrEMtL1BZZ2M41",
  "key43": "5rpaovRF3VPYfpNgHuCfiRzgZihSwo3PUsdgiJXPPorUafaNyz7prFWTUb7o6adTBXyvjGqbsy97ciSF51VXCe8f",
  "key44": "5XECUxgTfajpjwffBWNyrxcdiKyLWjm95A2H9JfpL6HTKrpYUWXu4QZvQJCXqkAbdNUqVC8NPUG3sPeRf9Nw4Qdy",
  "key45": "3tCwYqrrqJeQCrLcgV3FSNkQVAECKMAu7TyXbTMjBmqSLKGetQ57NUGU6Wzzpxt7xU7m4hJseVt2275xx9bRYUhY",
  "key46": "4XwJxuZRUjkyCkLDdU6Mi3ZqtWApKY5UFuumDTDzugzRKemef8arauxB1rVTa29skbqRo7U4NsfcEFPzEuDm3zTg",
  "key47": "o3AJPxEW91TEa5HfXmQUvmntvmho6kdT4MZsCUesEtnj6khsfGgLkqXyumMbmjUcNp9btvgikA7qqfoZRWLxnEy",
  "key48": "4pGBrfEQzhWiQJXUUtUdFJ5NfZjitA1jdKYXLebKryU1SFE5DFghyeWUpMDJJVfCymZLYedmPxrqaNULACY2JHFi",
  "key49": "5Pr5YfczkGbcd9XkhePeZZPFK8md8KjCfNbi2rt4G7573irhHEWchqCEJg1AZqJRp6gRDStcc59imLJo1DKiCfT2"
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
