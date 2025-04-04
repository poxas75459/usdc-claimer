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
    "3ZEpWr2KBfKU735kVwvburUv3w1YFteQnthmXzJD9GmX9cqZTPYzqQbZrtcaJeDX2cbaS6E9HVmpZME1WULiGfCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3V3CYGLxoBgLYU1JUbmDiD7ShQYXKavjEjBY2hGZALTcJGyzWCFS4iSykJV4ESaKsKQ5mVcPcZpYPrRJK1hxif",
  "key1": "56o4tZ1MbFCKb7onsWeDPYEf7UHceVZkLKk9vguW1Bz8sqs8t1DkBiWcvP7fafwkyHZ9gZGq5FseeEQvGuRveTrm",
  "key2": "3kTohszLaijckgu5qTEL4FiG44VirnC3UjSbZiBv5jTGrQFRzFYqGa4CAfs3Hjghu22W6oBqs8JiYuu3YUDgxjv1",
  "key3": "34DjMRPMsBUQBJaE7QbXTRYS8ffBHC1LsLQsVeC6GrBshfE4immoDB6jmHQUgSrNDQWEBHRHJiz1AJFqohZTNTwT",
  "key4": "5nomHPtCmETXBzryx5BY5Lhy2idck5qbZsHh8NDLp8o7Xv7sV5Erd3SE1YZHRRtNJ77Gyb35RMwTQdpaaKhMdpU1",
  "key5": "4RfPmTfVXtCWyKZ7rpZSjKRVS3z4kxvC4QpohvxfzFC5ngStMLp4AQ26DuGqP1NkcSsdWmyYujLGrRvLQj7D94kS",
  "key6": "2fHivWqhCbzg6EpyW5nZyCtwonNbLbU1HRqs2vQM1TPhDuLDWGgDhi9e7c3xcMD9bc21ekFqSVx9D7G5FrTr4fW9",
  "key7": "auiv1Niq9u7uvBiVQnc14ZXRc6txzCGfSANinb95FfJxK7Wzw2QkpM1etUyJE5R1eDwaFL8QjLRjnQhekHqXzV1",
  "key8": "4t5VoAdPNtHFqeZcQY353NYtpiWot8jgAK4Z5SSHFeGzGwN2iTdGUhpcsWZ5sVpzN5bwQNGpyWtz4m3tcv4p5ybw",
  "key9": "67MJxzR4QaiNTyjo2ABqKPqLJbvV4busCYHLzMiWRP1PvgQXyC2oMR3eR3JQ6QLVxqMKQ4Fx1gMxHhD2RLHZutC7",
  "key10": "JjJihvhG2g83LfmDRpy97uNj6v6tuCixQ3hw7bbkGVcsnnJJUjSqo6wfsSumQxBBbDaB2MkqPJeEEaBLmHc75pj",
  "key11": "3kSo15z3fka4nsdkcVjEgyiDrr1tLch42kcuBUB7ECAejTRampZtuwXdZvm6yJ8SssssD3pNHpYvj3v6Fo4BNuwo",
  "key12": "4X2V1eHL7rVgoSdjtKsoLvrYdA4om7JQCRh6RAASXvqMWrBvrYAZjEHb193SaXHHdYmrs5kASCUHeRtc9ZKhGTCA",
  "key13": "2c7iMBTh5yTzNwFrJZdKuZhPXdXEY4HEPkBrqED4FHuvrmk7KFYaik5N6AAvM4G2xwBLP6qyXCYNhSFsqnfka8sn",
  "key14": "3zdmffWuLvAxrzV7RAkVUr1E9HB3S283bbwc6Y51fSPWCsVwQ2Nqgkd9UPt84ccynnhUN8CSyAfHAr2vesMnepVq",
  "key15": "2c2Qy9ejFKGV4jGnZ4v7NsCJJPcMUPdHG17YMkBHSQFRNTNXGgDDWrAxYzW81kTpRGsRyoZQ5DZpwkc4bDmmEhhp",
  "key16": "3KpFFeCa43yF7BwCxmUxPvM82mxbR7YDRvNYAbKhbrU51CNzhchkR35aHsXxNi2apEiZtQMNJEPauM5Dnw87KCiQ",
  "key17": "5Ss6RAf3aeRWSgpMJVJiAd9cU8ANUbR1mJE8zGztStaiJxrR5cg2MrULx3EnS3VkEZkGn126SPWALVk822j8aMJz",
  "key18": "4QpJan9HoiwQ277FRhgnBJJC3vBgyoG4Xo3JYySZ1LvJLTvp8e93Lg2r6mJ64W5fNTKQUw1M4f6NseWuMFa1R9KS",
  "key19": "61HPwPi9UxQZxviuo5ZidB7xPsf8YZjdLyfJzDZbQKxBiWH2tjdLU8jjxF33uv83HPsF52T5ZCeMuk3UNu5ewihc",
  "key20": "513BNrUs5PMcCgKUrJCSKiXpowGH8uxmumWY2saFkvJE2z4fGYoRepJsypirVKGGx9ucYvfndTV7oRdb1sbUceyX",
  "key21": "34jBMj8HmToFGdY9fc6ZJgfum2tCvpLa6zo7uavQt8p9eo9XKSS1Y16MFi2baFgugmyeHUZ6aFtqco8ifzMwpTNy",
  "key22": "5LAFJfHV6TLwDrs7UoiG22tGaNYFsxcCEogPUQijx374MPwhsYaFsqYvXncieebdYuxSmtY13GMSN7t2vSQZiUjp",
  "key23": "5kFuz3wEzQDZoUS9amaEmUYWgXQEq7F7GiMbMPDqQ2HrwceqDNFoTngxJhZ3ZN8txTDEtyggwXUD45HW1pGxsDDa",
  "key24": "3PkTUBCYGct8YFPVuwGz2zR1czYNMw5jo8aNq5rzKYg6eFbnC6ViJwq8KC9oQ1GS2pzcvyWtCjD9spYmqwuc7oDj",
  "key25": "4NbEHoAjF2yBaPbkteH7GCxBmqvKAk9jzmB2niboL9yvr48qhpw9MTszWjQim4Lmf9fNu4ru39ZyTWczRgqJkLVb",
  "key26": "5haxS4HLDbRBa21Rs3TqPeLvFZjZLeAfkErizA7Zbtc1MRZdqnnPY1NaEtLb7o9vGY7zjnL7AY86LsASnuYnMjgg",
  "key27": "5PyaeSw3wNJRmFFfqnjHY1WDv6d2FKfGGKa2Btmxg46zB2LXBmiSA3oHS6unscxvYTnb9JCZcJ7THZkBcNP3F5Xw",
  "key28": "5bv9n8zMRuaBnASN86E5VafKi3HRPA3A3N8p7fh9ePJCeGmdVCNwruWjZb6vQyCRF6ynBUnhHujc5MEHSfuYTiZ1",
  "key29": "2CjS3e21W6NJNUTAEQXR8vnbeZRyEqXK67SW4dWDQ9Puf5b9FcqYafKWU6TcPRc2xTYKDPuFxcKPmXg5pzY79zuy",
  "key30": "2RWUDobWsJnpk3vR327xwy7dsyxGvyUct4N734SdXMQwTvftHkmxHwWfEYJqXo47MrDTTbCMPQKE2jQcUxhSAByY",
  "key31": "3rKbVYNe667BzKMVKDZJL5gShps6hfXLBhbBswGYVYxEDpzVACCWijTcEeWS75MPzLe4AHH6h6cJgTvGXgW1hH9J",
  "key32": "5QZddhcYnjPnbdTakNQ5JXucdXRD9EPFjY9ypBZKkgrfy1JPv6d7DPsiCKL2LyomsXyWf1CyweokxkDHskaQAchU",
  "key33": "5GzhY67NiTsnG1RtTbb1vxvdd5zLeab3ds71nSscnJ9CLRtfhqAUEtKDiB4nSaE2Jo44paVwG8dUCtg3WFw2Coss",
  "key34": "GirHAu7s1du4tyKD7AGfHUskgLvhcpp8UYEq5UtQTMrFAKnCHbQZfcttm7ydPjKR6H8n3rYJjie3vsVUvRZTqQU",
  "key35": "bYfqc3ARpxoCcX7fanYE6ikiCkU1vekumuQSnSmr8mJPmAeaJp8zpaKYs9ouGBu86zzVG4Es5JzAsSFf7BuopCF",
  "key36": "2ijLAV5cNKSfXCdnb2rpu6zhCrioMKXwcWjZmCpWohxVxAekeZscUU4MwT3GHdRyWdjG2AeXarfYuus2X5Tfz9oK",
  "key37": "5bBUWM3W16GSZaK94eKSZhgjzWoTu8xkzWwhQh5vJp6aje7FkoRBcRxR3RUzqhEzNat9kNQv2VqiMNocXLVtq92v",
  "key38": "4VcjsU5WGfeYFV2vrzZUthzAMGbrb2RRVG1PTYs1a1AveWnE69VHVoEnYi2yMSdM5kYXe3vgJUHDjmeH1CAqxMV2",
  "key39": "2JytYhULifvQqndNHHsMCen9uTikA7kmpzvHJ77uwR6ydXKZyqgpSSn31hTESeytRvq7Xt7db9QyKRkP6Lig6VsE",
  "key40": "4B9XNzddTjRXE15Xr9GGz6rjqxwWSKEhaUJAVGiGi1Z7B5HYstrJeCaLBHeiehtbjgQSicyMsXajgyiR3UBVbNjN",
  "key41": "94KpuDUmHtjdp1p3kSLQUPMYwkx64PQLSJsdvsa5mXQoXs84atDhCEWLfkc9sFFTukU47n8Hif6m4rVu1ttuTT6",
  "key42": "4hNQFGKApj7q9WaQ9xpXzYdXdXoCe3Fa88gTWiHnTWBKpXfNBwqkxcYyLnokxpPSJgyKbCn1SkchS9ZGtyhrkpJm",
  "key43": "45Eb6BaFRksFj2bJYBVixVMfxADURsCBJ7Re6VHE7cuSn3TkZgKF83WS5R2cbYs3j2rnNZpxUXCPdL4meJDeraVo",
  "key44": "mvsbJDjUsFqq1KgLRWsp1riHCpzztfw948iAxC7LTojUNFvk9uvNDwEBsCjrAEmrdLszGsmNqSRoYMx67DLmCvA",
  "key45": "YGRutT9eFDHiBEB8aumT9JrvpugptVuD81zSsoTTuEBEm81pkBKLVfma4VBNv4tnjoSLbSS72jhovrcMgsd4wcU",
  "key46": "bURdCrB1GfPLwDbP6mEg3WX5jxsZEDZEZ5h32xjVVuaDw1k8gqUTBAnehhtHe5JK8azntfEdfv44L7ZCWDmCbvk",
  "key47": "3aBvyv2xoyQLLdxo7CaJtdubXyxnKStk89acRBH96RUW3EJj7NWo9nyQBz9Ey1mbi8GPYxsweaXwgYU1JfrSYKB4",
  "key48": "3bzQJmzA8XuhQogmgAQSFswH6aDvmTeSrvdeXdvJnFyBoE6dPsn1fbUCoT1DqYB7dX5U6wskoRbGDhSBRBrcHKch"
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
