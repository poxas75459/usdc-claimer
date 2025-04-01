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
    "52GJaPcsHdYsRQ4qrDrBtdyvBbFkDsL71mWwscfc8mJowKPTAkKpuXtr6Fw1FLjLiJh15CwAyj1ch9R2F9Bq4y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xjxunyBoMkVestymUnov7bTkY3G4qXKLH1og5CsjSKVtrZgTKK1G77xow5JCLvo4JusULPjcMZBydq74VzzTyHx",
  "key1": "3tUoNEA59snML1UBsA4HzbqKawQHqc8hLpFS7MnGcQ4EpzgVHuvygBzyQgBsfxDiTkbVZ87jkNX598AKxw6HSyiR",
  "key2": "GAstyk4qBs9X7f8a1tHoL6vtJ4sck2q9guSXe1anKsYPH7GsxYMedT8kb1S4ZxanAoCAdm3xyBWN5D1nFrskmCt",
  "key3": "2ZwVgfk76gc44hAHU8XGacPTAapqQF6isDkVSaVj3ZuP7XBWZdBMnwe5bp9PPe8NiPUH2wJrDpsi5xn9j9nSLXuS",
  "key4": "5uCj3RKewt7KRf54R4RtrcZZRE9CxUf4Foru1teuvKPNY7W7asWNa763o23MjgcKkqgNPuugcyj3PxvB9P738Kz9",
  "key5": "3NbdKxbg4A24yja2APVK2q2Trd3ihrqM3GLp61dGWrhZu58BQbmtHaEzCFHwq2XPCW4JkBe1EpUKpWwt3TtN5QHr",
  "key6": "4VrgGpmC3NBMGzXTqLbSHVAv4TYL15sYr7gacvrnZtxoLkY1joHJHD5ATXyyam1S5YmjFLHQqV7LsW94XXZcpAAV",
  "key7": "32oVYSacAVHjTBNSbJTt3TAfG7mqpAQFnhsVmsBdZwdZf1LReFnYmvVhGNdQvtiBnRk4io7P5nuG3wEXdJ2t6WnF",
  "key8": "2fakgg7FGxBMQQ49D9PSJaGV8q3YycaAekhJjf9NUbMvpG7wu695DZLxu25JLNTAPk5Y1iLjd5U3meqhyBFSnetD",
  "key9": "48iNPFr5znFymCTM2wuCmknkovRgiWoTrTXMuD1MWyu3nojHcNMPFUWZsePyeqrtjdYdwsDd2W8TDoKF8y9wtL4o",
  "key10": "4n3x6UsHzDGv2eEREWmC6y93cqyaAc2JoU2VogJRx2erWmGe2JoZfxAay4RMxkYXJs31rmTKYtLCqAQbqTChaR9S",
  "key11": "5gM5ae6EufUucj6oroc7izXATBMBm2zg8BYifkgjMxmeWpd9LDbaVwtWGP3qnKpYjidW4L76sti3est2HyhVShk8",
  "key12": "5PcCmPqNGixqq3CpgPGt3DnBgs7GkrrLJaRgKh9Y2K6WA8WNVLtBBc2Tsi5RSX3czGjQR5e7pR7kBt4C3L5nr8DV",
  "key13": "KWRZyJsM6WGEwbv3WxCsKeBSk9zrkqRsyef7pWnU5BfgR36kv5gU4Ewd2qoaNYBhV8JqNxzYrHhoEDnqkZRUjht",
  "key14": "49QYQQHV3BZ8CsFSsfi6qkihSqGqiPMMnQy1Nqg1eHHSCaznK61mCWb4pdWgtsAzpe9PicRR5vuARdrAAijay94n",
  "key15": "5GAVCi9btmLgULm3B1YMaVcTLsyJ1bLdwDPuzjWNFXBr61kmUQ4gFoVSDVLJg6gLF7juokmtFPrLyF3itxNhfhSo",
  "key16": "3nZgRU4RF6aActmAz5atSrUz9Kk9kHKrEnqemjz44b5r79KCGJj2XvF17tFYuic9NAWhoYNhfkm3k8iuNY9Loy4h",
  "key17": "63utsCiH8addG7xBNwW7Psm5KXQZ4pWS7eocwYY74CLytKKmxABMYNNBVRasfTxdAqM9nbbzT5SLsYMwZFGHrHJi",
  "key18": "3Ga7XDUaPAmNnXDb4NQtbg9GtCL8ty7R1knkbPP1kfWeoKicka76zPtgo6SEcsDT26LHyNXn1mL4m6CWzXFELuXp",
  "key19": "21mUpt3bCPG2CHLuUPKYHAbdRGoH9cHNGEkitfd2seuMYsVmdPB3jyVD7GDwWbaSBbKkphxz5NzxL3A6ebPUacW5",
  "key20": "4jHWbbPobc88AC5qjP5kAtmBxAT8tbEApr3kqR7uQWtKxDAKtyA3B5Vq6JbfDevFfwCqbw6iwMxUneDMdmmnUHCQ",
  "key21": "2VxsAeofhnHqvzhAkWhqSeDRwCS4HftxqsxYgzCCUSRVEAKcYY6puWML5AvzcSCiiqPNsq7y8rxqfx3ft1wakyC7",
  "key22": "sU97gHu8mUVSJu6qbdU6F19VCpgUvf6M5MQR65hePLb9R6hRpoUfWZmihkwrKGaJ87cc3TRDUWEy6dHJKzPRSjt",
  "key23": "31SzS9qr33v8s95hotzoiSTWa6J46GptXvvnWdP56GNjt8geJUp3SVUqRHzq4EHpZ2XhBfTxuLBw37nzWEHAZ8Wj",
  "key24": "HVFjyXHe3ZMa6XnaZeE6KL9Dy5Rd3dFkaYr9WQt7uhZ1pV94qtzijm6WtSs8eAVLiFXaWMEQw8KS4imgLESGfvs",
  "key25": "Xzxmv3Uym8PwPohji6B8MrSfdE74grCG9ihNCAaDiqTo8u7qHtDmSqBnU3uFbXTPXeD1yDDkJ5s3PoEW4cocenz",
  "key26": "36E4KR9vmh3VkZRjyAS7mG6skn8zsiTLt6tL7xMi9vxGfDEoRKuFFP5aTsqKWphwzv1oe9coWsWCbyqGy7nYeoWU",
  "key27": "5TN9Xfxvz1TaeENS4i9SFWtRWfURXGtaeJzeBsrUmsSfGdjop1uzqazK8hPVigu9wUtyM7PFrXoMfhjg11uqZTCu",
  "key28": "wEkR3vJLGKeGgJhQCdHmQTC4eoLJAWwAqMaE8dwTRS7Fxm6dJTZVBs5SiUomumcAGC4XwMQqE4xn7nKhxeGRuoY",
  "key29": "2ReF4MBdqoa6M2boDQaisbrG1LsvvNU5cxjVzm8nf5FZKMXYHKvz72nayiaCSbwtpAsHL8saSWDkbbMz354HVSQL",
  "key30": "vUjekajijoGVKNz3jk5yorko8w1jCjDaRDfEhVtq5uFKFEtL6goyrHhojJGqeV2tt9NaE59kPyy6QPLgfVgBjgx",
  "key31": "3FCsj1uzevHHh5BfHG4wHXK367sKSMmieeBaYZhi3c842BKzR1eoBmUvHG6KwwZ2JzPjcvXrMyRyTzswGAjqwdx9",
  "key32": "2RwusXCpTZzNjqhiCzuP3NRdYy8knCuPoDtoeVZ6Y3DUhojzFr5Yv34fKJaMRDdDuxNvisShzwVMYP7kf6HWKaZG",
  "key33": "4MiGSuYp9vSAWKovKm1FrNiTpUqhcHdV7pN5wyVnzGUTuAXzRJZH6eS5uTjRYTYBJwr41zSKAr1ctEe1RViPR3d9",
  "key34": "3Sanmm4sczkXvvBWLn6EeG3XQWpCsBFnXwaqJhhaE2CNXbTPqMeF7qZBfiJpZRQo5ubawq8ReW4GXP8M9FGAaBjv",
  "key35": "5VDKDHPZ5hfmRrSMXz9Vmw5mQNVrrHyerzZ8M8xTwseuKYZ5WDhue9GAi4g66cf4GkJDd6zLpfVTsewCLy5tFiLs",
  "key36": "nkZyHtA87eSL9XPE1SYgfrJt8SA8AMj8p6tpEmwPac8xiJqq3mzymudPooaWnECLjxEK7QJT7nSNNE82k3ygYD1",
  "key37": "41xcyZhFdDbf2sq6zemJJLuouvEwVvA3hzNPpEso655HH6zj4zv2Gey5gaXuVW4SAuDhh1UtbS8HkoPuHiEAANxJ",
  "key38": "i6fB8qv5f7mSAmbDRfP26czTp77RreJXHnLego42m1T8bqabFv1v8Ks48RsTsEZv58c7JLitM3GtXH7wVrX7AzL",
  "key39": "5KGfAX9HdUucnoNNsKztkZJhZni3uacQU1j11jaBkrYBb7EaLsxnFWRoKw6Ck8rvWgMzT6PDwngFJwoxjuDS3VM2",
  "key40": "4qxUTMWDLirv4qm8qbu2PVcrjVo5quvhsq2KyZihWgWfaYyRzPydsvbZsY4bLgAk7AsxNDbBwCjTyX4ZDPUVy8NK",
  "key41": "3kdv1t5rfFMbCW16AwniSRWiCyQdcccYvjfV3hwu8bX4E5WH8DCuFbKB4htYqMnERfec3tEL36YyCMvfD2NgPf6c",
  "key42": "c2Tv58xTgfGoPfnd2Tv9pfAH8AJA4Dq8Wzm5j3NWetiVyHNdnfCiPncZLoVVvaCFgzmF6TG12qsKW2uhFMr47GD",
  "key43": "2jgceftVPDLTUghVLGarxuCBpnNerRTAXaPn1F3vQTyR995Kox4GUcxT47fqovwVhqWVvnSKjngXfjWcDJVoepGX",
  "key44": "3D7BbzMQPcLvPFptX3VL4KPshdFHABPaCrRn4n3nhZu38aGmhv1nqQTFhfJpnJfW6F3RjZA7h7x4GpEXYJX2r5BV",
  "key45": "62nFacYLVa7bKQrE7JJQWAHPEohhABNW41s5r4zz8JUNTjQyoJXacUqcjZAGR881qi8FvSLKRkeB6TcVMjemimaJ"
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
