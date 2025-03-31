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
    "3kfD3CSWHf1eEq7y8QkepiP5JqUuCudShfPq2aEXdfu27Qd32n4CD3rcWEDh8nndLPmvoxx7GTGn6amPLorgWd2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eBeKQifgyoVyyZZBUem2K7SGKs6Gfi33AvmMuzSb4kNE2q1kECgpqaVMantDC2WTJLdNaoW43QHd8DbCh3JDAdL",
  "key1": "oUEPfnRQrvc2HHxeRibsqDxyQTqXWfmVJZYzMSK782SCSDz6jSxTot2s3iVbUVMoqLjiDCVTA8jHukhpMgvdjij",
  "key2": "2kZmtDibUST8uXT2CF7QQqmv1wtr7iebezu4dGuugAAFRoc6xgWkc9ySXFyC5CTudWntix3pbBWQMAVMrtK9oHbL",
  "key3": "2kYMVDde4SQ7LEkyPL6VZEmJnkXNtb7EXwrqPEw4Wz9KmQSE9pERwo8jeZb9CkfgNUEWQ546oWmWWhmk9WBieNwK",
  "key4": "42hLiZEnAdHaohhbwug5dfnG5CrvV91F8gM64VQ95gerzPVRGufPr6uhWD1umL31R8RF3Knx2tcHHD12FAmFTZ8",
  "key5": "4jTFuWWBbNaxbjdSGf5TLQ7wawzdwYJHYRgu4btrxVeBLZYgdRMFbRweemJw5vgcZSbAxRz1jkBJyVfiPABGNUbK",
  "key6": "59LmRtKiUwqu1KwMKmwhD6kciDWrrMN7B2BbgXBJ6WNLx5XRJ97MNB4X1ygVF4AntwoKgk3BoBnn2nusTFQoXHpP",
  "key7": "4uG7g1NhTyv7qEN9MqJezMauK1aPFjgVXGUyRJ6Vd6tkqEgn1647Rn5C3tCPSEgtWb88KVDWcL13MEZWruzFaWMU",
  "key8": "38qq6v9RLTdMNuS5snH6agBEBwUt6jBCmqdUHPLwFW86rJtNTu5hRuD8cXfAeiwnLQu2tovbbGnRVNZFS7pY5YLf",
  "key9": "2pH5tMCyKxHVZJSZjSKmRtAHKzbfaHt1FEY5hky5Hid4LCDt5NR4Vk44FzabvdVHYqDJgYmUsRZpCMCmUHHyjKcM",
  "key10": "Ly1BhHvhp9ZwUnA1jKSdwN8bsqYjBvgDDhc8uQyYufiHJuyRb8xZdJLjGXRoYuPSiMi49CvKEgBkSZ5UyQ827Lj",
  "key11": "2VChaiqyxGpjc8CHFiWfbmzK6aDuTG65VnrrYzwoK2AN6QBsmJA8KSYNgJjquW9qosfHKtQ81JZG1WfypdSDLfXB",
  "key12": "5ZL9yoJcSeLX8kD812PWzitKjV6B5gHDHtAusoRk6WGP5XXsHWLq1t8jb8tjqBKTREX3GY3RvEKqJfaFofreNs15",
  "key13": "2EtK8rvGenMLiKh7vZvjk9gg2heBbraEpSqNJ3GUKFipERyyHQowknGzhtXEMxyosRCSrBBjGRGyb6EDwPGHcnvd",
  "key14": "5DzLL7WTEdHKb657sJa3Gu5wFtkpXAQMycZ14pUA1rZEqgxMRwWzRX8EqcKLuj97ga3bUpfe86unpvCkaciPquAS",
  "key15": "4sLbtFZVsb8DmhqQsAgcEQf4fWbmevcFYvBBW8N2DoyBa5ezxXAuC4LefRw2X85FoeekfPisteBTQudDAWDUgeMb",
  "key16": "5mACFG8BEbhj8zvxz2hXdVikET6VL9s3MqM1GFmzsFy8PejCziEGmxjEUo2QxNx4eyPYGjAHWiz42WF1ZDsxx6bW",
  "key17": "2dKMpsmvKEPMCvYAZEUwZfoFEaexw89xP15iPGxNRQuu9tLquEz93YcPBYSmyK4yacXXX8t1iSRB4hEjd2NPARYG",
  "key18": "2qAyyzybBrriiY9ZbtFvL3CqPvdLFzp2KzCHnft2bkJU3Dfd1U6f3kQ3uwRVbYQvw3oFveaSwoVnj6ZUMePqrR9X",
  "key19": "5HrEvvjKBUp39g3QA9biSPiq3h5wi1cDSTsxwHj9QpUnTqzHpEcdrdw9obXxTSbe59Do2cjWvcqa7VXc1KDQ2C5h",
  "key20": "2WEeJx4HDnEysksqUKCAUxdD2rnJo4odAQ1vu4VNzbhB1BL2Fia3kboFLBqfPTCG8Z2o8wtUXtA578yi682qQ5vP",
  "key21": "4E81bNrXnUyej3eN38giMoAVzxitN62sK7ATi2Qj5VXbSeZ5Ke3kTjaCphMcDn1gbzK1CXMwA4CehHDNqBmZ1Xwy",
  "key22": "5DRM9JReRry9bKDiNaTBfEiktSi9KzS79VJ5rjXUsbgAdSoePedDGnSeeEWja11iwRX3B4E2VpFuTbCTaSM4x1UF",
  "key23": "2BM81UVQMLw61iqobX7dduPF9ha2ktCMBaReFvpNEVEN4wEZvzWx5KomqedXB6E8j24wTinb9HgCX91vutgYDVZ6",
  "key24": "j3qvxH8JECHWxYStzPbQB6LNLTf7mVUf9J6A9m5iPpHT31ioP76xbHBcyNgEx7n96ZqrZE8iV1JUKMwkRuwfHNU",
  "key25": "2yU1wBnuTBkgo2A83oU4BUPDvFP83b2DcAE8DhEccUecPmD5vzjCybsWvguYQA6icYbLG8KrHaDUYmfP3n494HRD",
  "key26": "2JecHYqZHTyjrjFXXY6Dr2ABq6uxHp7jgn5Kh9FvKaimNkp6GnzAe7vqxe1BL4bQX8gjYa5gnLn3pf5yH4mPu63Q",
  "key27": "65XXU3Yv76jbvwgBXwFeqo38od1r373GZ88XWJZktVTxnZkQKq9B3t596pmDkLkD7vniKC3Dvr5xpLHyqbo19En1",
  "key28": "4SVQWUpm2waQ3yDLHuLb1mJ1EX4mgKdKoi2yomyMWvB5rxo7J3cUyK216noLRwJPviYk55oEsX25APjidV8Ucf9g",
  "key29": "5n9C4kxxB6dPezHRrcvX8rgs51SFH73oKmQFKhAhcnR3jiMeFSf87B1CoCBwNtWozRA9dPuPPZTH4WXBfuRNpjLf",
  "key30": "45dJh5qHdbXtHzGmmzyAVwSu5WJgtEDhJkUB4Ni4GMBLk2dgraekwa6Jg7U7B9wZDx9WTF1KutLAyRANSppF3aZb",
  "key31": "Vyy6i3ewHibSwarvojXfdmBXLuL8oRo7sppLsrpit1FJmgVRo9JidbPoAeUiZVm1sAWkCfdchVbrEaDXTLzCJQ2",
  "key32": "54ztWDNv8PrAPfV5tqL5ke79EKHMnDoxVSZxUrE2L4WUuEnLYLF6aCNE9gRLfsiqTdEm57Y6tcn1BVTVz5g5rFT6",
  "key33": "4nfDjB9zm2JjUae6KSVttPLWm8reoLK2FyvUjfPpPZfCp9aoGbVUGah4B9jZnQoLJ4EHVwMDhtPMVcxinVKSAKmT",
  "key34": "21KR9kwuPPke8D2Sd8TKWEBcJaGyiugUUQWUHJdVCHq7wxBPT57DV5wQXZUofAMhS9Wz1pKoAhmsVsSn2bM9nTsK",
  "key35": "3Fk64JpvisKXN5uSi6kCZrN2JLRCpXBmadcoT2gAky9EGY3sTz4WoHGuNQzxBMmuQkjbheDyb8D7WrGVzSNYyC1m",
  "key36": "4CapBEBAXSy5BmpKCGFUMLR1xfaMwPp3QXm2wFyEqc9p81heQXB8E5M6wyWL4oc4Hkacxca3uefnUKoCbBDjcZjy",
  "key37": "52vDNqP7hBzLTuUetznCNSyf7hdW3UPGbQV5SzJh9a3ZTfmm8qFFcWbURYsRSEGEXnYV7jh4W63rDR5Vfe41QyRF",
  "key38": "6772S5UbfBEcTjRUphCrGMjbGeoVmTc9vEkKKLhoF7t3qcJipKEiEzAsev8U7s6ALjFAXVak8HTseTjeKnYfuAoA",
  "key39": "3KLmqEXZX31dXyqk5NFpnQexhbZWQSD3BURqQFK3kyhZdqnErtA2haBFpzNZceYEqE28pEPLUh4UjkBHBf83aSDh"
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
