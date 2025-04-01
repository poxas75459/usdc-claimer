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
    "5SHH3EFgCVx9YALLpgy4F8Xozmg5i42RdzzRWpmVvZuULjXKDpn38y5BancjfdNfioNJm3tP5H1yb3N5hzFk2mnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5dRUcGuk6neiGcrWw9usd4ZYDTTNSh6pujsNkiVrryMcaQ1hq5M6VjdQNmHiQApnNv4b1UazySn2kayhrFtGrQ",
  "key1": "2Bp6eT6VkeV3w4SEsCjQxgm5zFsUHPPjMweA6WrWCG2yG5Ywt6mfGVYDLGDM1HwdmNSo9VqkSwWfYEWomRtS8E5n",
  "key2": "3hwkNW51ALxqWtu73jNRqgMHy9einyc8m82ELEsD6dQyk4jPuKNuaKs7x3Vg9NJKzdsEyDCNtFdTdF6xbpT9kcjz",
  "key3": "b8FzryNUdgexVCAGCUVMheXQoMSrZsFgH5HSex6mgLZ5Zk4ybYi6NUrApYKGEtBMvhmGsoXFFPCzJn3EVPzYsg6",
  "key4": "3WTKogu4bwo9dAz4vWfY1etmoUJBggq6rfSwUHvmj9sooAqcHoN2VwuCqFaPFSeDeiojmkznrfs13gaXb6f49Ejm",
  "key5": "4fBJpGiHGAu1RDFqp61t4cYSEzPDezGyWXSbjAAtp1Gomb2QhNsRrw2QttWZ3KS57cusvaWzbibeFLpFAJqaG491",
  "key6": "krrRFkYwr1KtSVKrRD9jpzyJBtP2A2p5kocsjhNqgorWzts1hWG3HNQexCNF4VkMR4N9UX19V8i3To4Z59buQ5E",
  "key7": "JtLsKAaNNhYUyryQWECDK5n7rL1CemVj6YAbn74waRe64MFxMdKgJps6Ste5oqkyUPK56Wrc6NaziEpjnZhMXtx",
  "key8": "4eJ9Ns4CNE7czKanyvru2U6Cn7G5n4ZBHadxCMm7exocswgjWedLaDodpsBDi82DY6qLkveyfxxnUbjk7zxTKPei",
  "key9": "yWedPd7q6XE4cQHXuQgdYkZ4DYmvA3QxeRDP9VE42xbCAtMMHgU668jyuuCu72GC3SacLmUktEia9q6Wp47rh94",
  "key10": "wXqtB46b8SjiXEed458QZfTGEV5sy1T7obpeLH2owbmZbaNWWL9jijLq61gbbMs9zs71XgyxWYzhqVDRHHDGBiP",
  "key11": "5rfegbTfbmc8cJPC4DFbke8mSpfUWQrdiZJ1nuVzBdf4ATCKnSbzCY9NLRKocyWA7o6RmERVPugBJfbsPqyg72UT",
  "key12": "4b19kMCJyPHndKAYan81uUYCsC4jpwZpBxVy16GsuvxSbdLjKZtN3KKCyTDerk2b4zkg9uhkpN9xMirCbKaHn8rF",
  "key13": "3tAFacd56ws9Vzep2ckPue149NG6qFueZ3t1RuMbDiUeJCyXtY8kNzLRMYp5uLDKBEvBMFKnLDUHe7vLcyczoMP3",
  "key14": "vcPd6osE3jQhjKwXKdn7vWyM1oe1qvTL7k2JigqADbrU3Yz5RWNEee56cAmPeM3sSd96XevAfyak78BiYCWUHPR",
  "key15": "48DUNQadHqacJB875CKTfhFzRqdX7YvEHModDAdjXuTyUuCoH8jgrLQw4qms2FWBENkTJqsf1kJCwTfXhoU33WhB",
  "key16": "54kzcLTW3CnXRwKHCN3ZNgBACxG79KRK83SzSDYjXKuk7M1TekNJKZebFkqnvY1QyMZyLBLXE1azfJriWw2jUv8h",
  "key17": "rm85MVbAzwmuYk23i5FdWF8BxKAa5RgCCkPCWwjtX3dfJtrAEyo6nUcbZtqF6GkK7C7Q5appPD1NQKxCWUZKUET",
  "key18": "4zePJJQiqV1mXpMroecrczP9B8DxvjvWMjTsuuP6X26YKgunWkCn2QKjKPGMFSCuZwSzVG4Fq3tMtoTXuY7E3iVS",
  "key19": "2SMKocbU4KEmLvw6vJZxRkm9Pef4tQXGQoLmDxr9qDznFK8dZMP8UD9PFBgbo6HxzaozSX58iQHxu68SfwyiVudr",
  "key20": "2QjXqdPct9yKRukCurpof6GixMrLjgxycaKLvYiBqiS1Yr5dLkxJYzTxbeMUXa85HQGxeRhig26GkQG3MmTLmvRt",
  "key21": "3e8FS5VhDPf117AyjiPcD5bdc4JnnDJTMAYGdozL9n3zz5ywUQxkWowQh7noe3ftWNabzEW8hJFaBgH4ShpEjG6h",
  "key22": "4g56YbrMwPmktVdbvBSSA2CsjwUJsDT4mSfkQhyXenKKVkiPwpSBevsd6nh1iMW12XJLV8f2tGFtMHD75SXNPYJd",
  "key23": "5dbUjPPCxmzn36mm5qKB4N7d7AqF4MqLy497iZEmR1peYq6fu9J1w1fkgfpfq2PdvYrZQE3Zyo8VveAmB4iLmHaU",
  "key24": "adyRUdCAPrh8kyh6nRSuHKbyB6Hfy3ev9DgcMzYKLuj4ZMh1G3vfhq5hYs6uscN2NaY56HkrfMMzreDZx26SYQe",
  "key25": "51BgrZhMDnUQgQh4CVUJVXArDCiRBkyHiuaYAjeoD1ddMgsJxK8oooBTZa8raE5eckbEAs7rrJxbU8QFGU7GYYqi",
  "key26": "4BA8L9fs6Est8wEUJcM5uDBW3iNgeHjVnbZH3WFeV2JbPrhVf1L4EY27WUCHbCwcgNxtChncn6RdotKR5yv5pebw",
  "key27": "2TMG6gxsHHiPgs9qbsmSsZpNwSxJaj4qrcd7wDKG9Dv8kH8RE3h8Lx9edJdVZNn7egtH7WGWTGW9mkuu5rQ3iEjj",
  "key28": "3kHNoYr28nRjp1NrSccgBrJvfRYrukE3rzQQYgJUaNCYvsKiUfNHZejhHZHYUyBshHgZpmzbrouB4CroUnBanoye",
  "key29": "468aNztuQ4E9tMoDzVchMMKwAxhT3xd9bb2PJuGy7v7CJ1JqCv31Jstv7oRFeMMquerq9kq4RisskqgVY5DG25PW",
  "key30": "VXzH93Eif1Pj1YHowHnEMWZTP9ExZFLHF9XHh68WcQZaNgq42p5EzR6Nd41Nfxbi4fLUfHVXYHLcv76cp39L2c4",
  "key31": "3G5UiaLGumtxsooDfwxNhGNS6bGGznYWZZ4F2Y8ZKsVASR4bXf9rQVJjwFdWAoxoSxytTghDkKE9kSpbxScaGhAg",
  "key32": "4pG1Nj89fdbS7KYQthVWhEUoNoCYCzrqMRfSuwufgJtkgqmHv2gAfXYN9EGf9KvtXEgN85jANbutJHyH5BDmcpMt",
  "key33": "2vQvWDd4MtSBTxfkGj7bpRT9h4iSuRPbxZ7YeVkwg1v9de9Q6xmZn9fPnBC9kWJz96XbGWHVRgwWbiKdKvkDRJBg",
  "key34": "2oTm5Mpc34wS6tuxtQtELoHmbzsK7H2pw911GE3br5dVpGeinGkavJX3u5tJSCMrQvVCbiDQB6cfY7Q9Xtc28igE",
  "key35": "1D9sF1oRu6Wdor42hD1snfEzVKNxgpvUAXFLzPadep5rPrjrJcer45RMWVUiourXVXkxDgi4fSSE1ymmyFJW3G5",
  "key36": "WzigUXnwT68j2NAu4ucSLphFc18yTDYPAodbyhLrYgGxkumcvaR9hfTytSm7foKZaZDyYf61ZKpHUZ6nSbTDFSg",
  "key37": "3W5r7vrMAhU6Yg6Xr7VPUM4wfAdVjRaco5WNeeRaJWdSCMzrKbkjj6eBYv75bCfcNats3niU1i58AGd7BT6nj4wU",
  "key38": "5pdqYqd9q37pgQsNodMvnNbUoCU49vr98oeGczRydi2XqnRkE8A61fb3EnTc6p38Z2aap9LbQcJm3vJVXzrWSKdc",
  "key39": "2tGcuRJZr24ihuzCfcrM44bpEoXGRUCHpRmGymkoxToZkptaPcK8V98f5yxZ6BA91YWTvtZvzwXNQcgA552ncmfL",
  "key40": "tiCckeB4ALQ3ZXMep59arPe32EYeBHeTZJc9FBcesxyNhts8Bg4kG76rHWfKjRwk1YbLifKwmY39XkXLSm5C215",
  "key41": "4hVHVarWRz6g1kNJgBVc9MQu163snT4YAUEVCqyLTebJwMWFUBUb6zvnMmDH9zaGDnDWwgsJDpQ7spqtseyiTEpA",
  "key42": "2M4mLUgwrqw4LS78fXFtBMPkKaxLLjpRRjpzsCkWRZGDZzdpJQsTFZwJM8zoTLhnUeWK3J6XnmHW7per1Lg7NwQc",
  "key43": "WYWk6YEQ6cQzta3eTLxZXUN8Ndk7RQYGh1TegcfEET4DZkGvpqQPBhgVKRDgsBAy7TzJnWRaoTADMhCGbT4DHpm",
  "key44": "aepsDPEagpLgDbGvzhVVLMzMRV7kMFg8qcFND3oK3aFznMVmtVHcaj66zsHhbzTBWkVUmQcwHTGnCkQK8fzNYSx",
  "key45": "5yiHtRV28UtxXERGAgoPVyonsTaGiUKKG9Hyp8n9wBzfbqgk6KxLC2w8dgneStnaNNU2oD2x79KzUbCRncx7b54w"
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
