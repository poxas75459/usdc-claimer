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
    "37XkXsou6Y1hkiyBjpGfn6V7p56A9PZSSvj8LvF7WtSrcWjn6U4MK6X5p1wnFKzYEDAJQoPUzFgSEa1uRXrdtsJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fAbqpJFBYeJtX5vV1bEVMbYk8v6eQV2CzXHi2LTfS8SmRB5K35nNkJLkSVp41TBzCkemsxAiRMtXyW6LRdN9k35",
  "key1": "3QmTtWiq9nFbyjtsAWWiHU55vsG2N5atZajjRmqrggyJrGsMtoEUj48TurKBZZwPRG3f8xcVemQQmYSV98jvsujE",
  "key2": "5Ud6HVjkCDXSH9bV6RTtFMQApVTNX5CZs3KnuJDYvEYGtJ7faQzZSX4Ngiofpk2hayw1YcZaPShaEsYiF6kJDp7G",
  "key3": "47SuYdgAsjns3EtGvBfFgDCHNuPzJCdnFDKUcjFwcghzDt4VvRF5MP6rB5jyXdgXFHNWWFsmmw34DnQ3LsfNveA1",
  "key4": "46ZcFHwAaEMG8g3bf6VoqEniUwhCrLCaaTSTdoFt7dUndWowxWncx6CFuGnBnP42z2TKi7BFJgmh2gNQFmrZijt",
  "key5": "5HNBNaJYM3QYKnmDpUcKDmbA9UUqAN9wLXEXwVKhXqYZ1VPJaQnPQGVKPt75mx9Qh1WjoFXuD2ttoRhQirkNjmj8",
  "key6": "2yKqCSPGAHeonGNpch9d9mZ73MpnZceQc6EopUhr8Yjv3e2HirN26VH6cB4239scKqSVfe1pDKgEAQ8sYPfFCE5g",
  "key7": "5dbgTbRUBka7qvQVDM7o3y5wv4YCreQahSzNg22udmVqJ1pS9GavsMCvz3foTd1eS227gJQBgucCMjqy6GRdRSaX",
  "key8": "5F97E4Qr7XGbnBtxUuu27dQXgAvnLv2F9qQ5X56gdWj7sZX5GHvEnwtCSfhTB1eSN6f5vJdxBa2H1HU5vm7ttitX",
  "key9": "uHx68DT1QvC7XJ1pseChZhod8LCqk4pUpLJy45cZpZftS8sn4LYDgme9AgHXaG2B5Hg1iXiynQ8ufpCiCLhKDKo",
  "key10": "3bn9AKEuKYgJtWxApVgkyiQceuGiSv76WVTU5KRbbH3ZAHqmxW6DmZEeW5Rxsaof57SekUmcD2KzKhXVbMtHqCCm",
  "key11": "49nWmPnLKtkxj96CWUtgJP5bddFRZUG5NXTjvCmm8jTFzuYtQrwhvyy7gMgnUX7KUTh5cvVtHxDbV99xgKAwdLty",
  "key12": "3mFzsihzfrTVFaKZf9scFFL5XmfizYZ1TShM9pY9oeFAvmSmYz15NnRwMoKxGEsagNJrb8Noq7Rj9m1eVeQvvKWz",
  "key13": "3dVnfXWAqbA2WWLHeTt2tcEavGNNLmUzXP8sRgmExkVszRJrDhuAUNRXXXprdjAWEyyLRyNHJYAec17JXiJYe28o",
  "key14": "YY9MRGWn1ndSzRS5xwa65BWpM8owK1YBassdrE7d6t9WqQJhidvyW8k8TPPGi3VU4NgGF9yck8RMwzpQg6yi7Hi",
  "key15": "shnwtCaSfiqGHku7eB9nf2oYUk8JoiyFfFLLZE5wxw1hU11RbxZX3DPqUJcmAQuPsot6SaKe2HqYFUCEYsQsatk",
  "key16": "NJfTBnYiXrYDVxeG4AWkGAUpuPEz6eVMpnRk5mpv4kDEgU9WnDcTzSYHpEWTNy94bqAWCSc5YooVoEJiQnV8Am5",
  "key17": "3NEE6nzgCQd8ZAwCk6HfuYQu3BiNrvGxNhX7DggtX5nLpavVWFrWDkkfXZo4DjwSMtiZQuBrmkC5abwH2niDoiSW",
  "key18": "4rtxEmxjjnRBPWUHaTFMbkKRhjUybDtPDirpXTbF4Yyeau87YWDzkDiVQAQMabrw8hgrZUgfNd5RYcDUuwSJaSfh",
  "key19": "3Ky9Mbq1fo3FbRvD9tMUs8zofQMVfEnof673DBFT6prrwq6fTCRWJ7egokGh8METxjqpMktxxJCYakjzsgBvh5zk",
  "key20": "QWCxPPMFJ2CH6NTQavDSuia7UtJEuz9N3idTwkT273R8dL2A5WrqC4cb5bmMSg1pjyh6fhow16k6KDsWRhWXbbC",
  "key21": "KUVQwQ6PWQdCipSChFHyDXcnBjcKgphnEGevX8i5nujpR4aLpxrysde6mKr4Q1ix1vCTs57oKCVpG9vSSe2jY9k",
  "key22": "56ceTmaL5oAcUDNyYSm8iTc67eszWGsdMFZxHiPmn2fRska4QcxZRKrUWvW3jg4ykXuhUmgS5abxTFsCKwiTFhc3",
  "key23": "4qeqQggokqLYq6X9J83Ux94hanAomfw8SRhLVk9qtgD7HH7qafEAUhqGfwuT9xY3GxuimGbxo9vfSwuSPnBY7SfJ",
  "key24": "3x4nhj4AdK6R1GUjm4ZwoeyDgbzohNeEtzeNaXtgbQKtqxW9MXa9fEg9PU5T9iMmnr6SQYWg5G3E9JXWDdXBaQBD",
  "key25": "5Qt5tWyoXnYo73ohUKCnDNKLibdqyWgh6hdHA8sWNTyWKVQZZ6zon3dE5j644zEbuoR2CiFiBfe2vXKNb29Cugm5",
  "key26": "3XHo3eT4yvG5hk6StQGQf3BPDHMv5iEuPo36JuC4ttA2q3ayKgfdGuFkHd6i4xc4sJi95TeyXTaGBy37HExu1ZnW",
  "key27": "255NPVRaKQhX5EXBQzQsMnsgwy6P2FiPoi7t2uYHPwgUgvFweurPwxnTRU7fctf9eHVvSj8wqd8NHdUm1UBHM6w9",
  "key28": "5zdoDANqFcXBqBuesKCb9WmZ1Cqte3fGqzZGpSpiTcg5Br4fEQzbYX99N1SiAxRnqYxveti7XkyQV3necQssPRU9",
  "key29": "5o41fMaJ1Z7d8tF1QS7g22eqiEsY7zUQEbZG91V5p7q6BHL5XSYAe8awoWo3br3ZbZgLTVAFvTYFS6w997RYFi1i",
  "key30": "2H5pFnwELysEbeX3mV6d191sh3R6MDXcCSmvSzL9JPQrMu2pPNjEDVuwEjQUkrem6Pg6cAxDNZaAM35XpofmZkdg",
  "key31": "5qGSE754yPmBdb3iRwVmDokwx3rvq9ovwrdJ5KD8VeeXikrmFjbv2C6raiBRiWAkksZoDcRtz9yR64GiGDoo2jzf",
  "key32": "3UDeN54UbYp5xDwJ8KT5BV3puvFQLdQzFR1RYCYTQTAHaq41gPPRyLZQGd1EKgrBxxsfK2xYjQaaLNfY8rhHndUu",
  "key33": "5bfRq5oSNYBDciNtmvjXFs5BuyuQqDjgEGg4hBZP8NkzC5QQrhECc3vMu64iR7SmGtVQstVfyGqP86Jf3QCkoYGL",
  "key34": "62CcczKrjrVq4ijknaXfByGULjdDR9b9apPNnAEb2EKT6CZJXnGX32uiw7bc4RrS9LssJrBzH2Et9FjhNMoJsV72",
  "key35": "5BE5Mnm7LS7ZCqyeuA7oi9BsWCwgbS4DVppErSE9jPwaABHERELUUfeExyt8UD7CB8dYEJZyAubSBBW9Q9Mi8F5q",
  "key36": "5RRj5uXoqTne2krkZaNjH2M1yBM8jS1G7qk84qYi4LAiD6urdvBkJCfmEyuRmu5qX5GFNQk1WhDZ4XyZAcmjbyJd",
  "key37": "mpSS5534tLMSkVaPLfLYmGNMnsczbjeYshoiqttv4GhMiR3xwwU3v8Nivfd5KmUHXcQTqXz1xLMNaC6oQEtvJk3",
  "key38": "2zPr8YhS6i3QvRhBmHWRvbWgaBbgu24grtcqWxTuTaq7T5p3spGYjM9Pvybvpm5595pxur8dH7RfMd36a8sC7HrB",
  "key39": "3D9y5gW67NoSH9nqakCfmtHjRqcUj1TJVjyZ7MVuAvfy31whP7zoQxkHFSt2inCBTxjWiN4tsNRHCHgH2svhnv8b",
  "key40": "5pkdBtkB3JGtSGiyJJhy3waV4fpt6Z8BKaSxhndtFWaTDa2mP3z9rh5NWnngpJGTeyBPoeqLzAUwshypmmxNLxRw",
  "key41": "57Lbki8xSjx9KNQUzcVCpKLV5cQYBLWwCaa317e3VXxPzp2eXbER3W9Ay25mJGn2sYrtUhoC4umRcXP7ujAKACyZ",
  "key42": "2XyrwPdMfTXfJ8m1d1H8rKB14z8jsMQmyfMfqppFrtRE2Grn3RhUr8tt3RYp84tE74vpv1NbnSTubLZQ6ABrK71A",
  "key43": "3aZzJxW9zuvgoy1i3avSftd88gJBkWrPVGsGPA1zw7BRRcirXfaD2WP7mbG6z6MFC5yW1E4fb8qAPMj59R73ES85",
  "key44": "4U37t9TZAjeDQfszag4VGQE61jcxeXhon1agjEehdovApZbdkNMfy4LoDEf93XDcRZQuo4UReDTNs6aATbCHYTpd",
  "key45": "38FfnBYy6hcWCQrPvRwb6L2C6zbNfGnkGtWf1DDk45abiy35hidp4ZhxCVqRLwYPr5zjSM99upVHaWVBr2REnvVG",
  "key46": "446i3pUmU5AFv85yqcEfvVSXDQEmGjhmoS1Ka5PWEdHRsiaNVp6MKnMVYzwM1VhKpWQCgXX8wrJ8zJgV9ocRAa1p"
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
