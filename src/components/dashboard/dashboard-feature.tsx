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
    "4ZXJkKEXV9nBAtfDY9xQQow7CMhaHE9U9Tuuo9pySMSNARLrhKYPX2gx9NG4HETeuQyWmqSj4RfuinD4zqXW7PYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qG3JTpd76eVWVC7vKg9UGomSpUU3bGybxWSr8Wi44dtUrkK72zkhRLEzNxAn6S7eKjdJXvPKro2nW3xjbj1tDJu",
  "key1": "EuSN5Q4nuhgfpgzYqJzo6GSEi9J7LUgTUvmrwC86W7om66AnUQQDDZvW9FRhkik63o78yxxjiL2kTb1oP8F93vr",
  "key2": "2Un69pfSHp4Fu1fRuaaEwKWeuNXMxF9P3XcSq9Y8euPdiUSmRoYUzNFE3ZuC1L1i7FiQ1G71WmxXWXW6qhd7ayv3",
  "key3": "8kMPi1otKA5ufKk5v85WtBum4veXFvQz9f2ZpEuzKBKMF8tkDBSof6EnTgWXp5xLWjmx34LJ2xEbgcaZo7VBVHA",
  "key4": "4ScD9sKvEZUQj6VWNcRKCpzWSea3CnWb7wVbxejGjj1QJBKeRXpkPy4i6q3pTpidgHTCy7ijAGKy1nSHedorWJ8x",
  "key5": "276JN5SeAWHYusJzoGWPHQxLS2M7kX1YVJn4Utoexzug8DP1x2NfKA2hN5UXHWZNSCEJywMjW15LUhM6FHQj6YZT",
  "key6": "9ZVRw3ifQfYEpmm7zvogx6iMXaaL8THeC9V7skDFvDPhDdUYvWwTZTsrA66jwfeTGbmsP6sqniduWfbd1SDCzJC",
  "key7": "3aG85fxpHJxc6pdD5tN5W6wPpPCUop1ExWWuXEssdCxHR2Bh1vaJ8LxNM8fSY2RpTukyntbFEhsGUzehKgMX94u1",
  "key8": "3E9ArfyjVBwnYrRb224jZycvqF2ZL7zioeBXQ8xyqvVTpeg6hhoVyhrVwntM2SSGErCMAaDQfcJkNokyVHTXEZsw",
  "key9": "2kuNvid3e5KwhJjUZACtrmxjCSB2zCZaasftP1bBNYsjn4jMPZhTeFaLwH4mEyGCNQeuZnQQpemNUw17VPSyR973",
  "key10": "3oEHb2HmUHzRnhzm6qDC8rZTDimCnB5xXhsewXZwVkfkNEqzACkwKZf61CmkE2hR3VVU3WanmUPFQTfhUd6n5mwX",
  "key11": "48AKKhReWTH8m9FxJnk4SMUyCPQ5i5ocBFhZxtb1Scuq2qzJZpwo47kd1C4Cvv8mJMozoVwfXwDV4Z88ohh4yaCr",
  "key12": "2SdfbMsumq4FQXSRywroWwtr1SsWG8K4vqtvckqo6kvLRT4C9252UyQefGkW5WP4mBBm2BaTkrCYEah9AVtFm521",
  "key13": "37Lh2rkiBgqgVofnXdtQpVzfVSaYx84YF4QQdyyYxWeypfh7ceUm9duLLT48UiRahtNFUB8MUaHLFKjuATY642g6",
  "key14": "3Ug63fS92ZCfoGD9gwwa8ifrF9fCsDv9U8adBjXjnPRem1bwHxAVDNeX4dpPRVCc5JLkmXFVD2fQ7K8CJoYqRc7B",
  "key15": "3ywk2YAopu3k2yyw3fX3RMPBqKNejp7UGFxbLtdyAm3o7Y5ec9kwu9S1NTLoz7qa9RYwmW7SGFeyKRQFhEdgncRB",
  "key16": "3mYZCdhnxxjGEGYoAszgnuSdkpTGivFwqhVpSFaxbX5Pvcoeb89shtyUsLB1sHZguCWJCJenzMCfhEhTziUa1P4G",
  "key17": "3dh8Vb9349QfGdvUYB3mdmJ5A8eNUXPVk8sKPML4CGTZR4bxnfakEpDkkVbJKN4tQdxdrSoAVm6wUic4nbyuhB6Z",
  "key18": "4DBknqMQmyCWuoih1fEsrx5N2Wcn9S5QGuDUnxfHdeiUbcd4Hke4dnvuxHhk3HMebW2TZ6AAXhk4sZTA7QAwgtQr",
  "key19": "3dfM42qCX6QKVz1ip4vfadh4Wt1yoBy52aQZM3UCHT5u5rzaxH5TsMLtaqeopbCGMgCABExo16EjMGfNbbbngmTQ",
  "key20": "5Ans9e6tFrWxZYtTczFykKbYzvVXHqW4U79pkvyePG58w51V2bJFY18NEmP8nbLtQrNSvuAEprPXrXZZXgMcuM9X",
  "key21": "D5ZHuUdjDT8QaW42tg6Rvd8Jy1423Q2HjbZkZjFuoRkZHSdqL8vyrDdyU2ZmHBg4om7eh3YJJMVX3WwYPN3se7t",
  "key22": "59KE8bhwsv82y13YgGPcEZsE1eMuXE24W9Ar99nE4uzuVLeKEyKN7EPbwFWHCVRWCQsNFRRHZDAeCBgqYXRB1Dck",
  "key23": "ZzYtoHXWqeZYdSBoMEz289cjBbQtoxnzT1LChuXy2WLzKMKTkMcwNJpytMG51AmcMSn13cdG3c5zQRgTJD6474P",
  "key24": "4zy3MC7zYL7fA48SQPtKhSQ11xfVurrX9tMSWzcpatZ5ZL1fHzJuZvRT6epMyU1RBaE6BtWZQBc7zM7ZCj1CNpu",
  "key25": "2bCyKZ9VoRBHBMSrQERRY5FZsT9VBFZPbhXKE4mydD4dugLKPJcyyDvwwHf8iKyL5jAm6VTaUWvS5gaggoWMjXHY",
  "key26": "4rjiKEU13wK7upRXsXZDM7HmDBHdWa2kfsEdtcZeYP9i5kSmZmzzA7zVEqMi5tuGL1Yn1tgb6Mm1qta9NM5C6MKU",
  "key27": "BA5uuY5fbfswa4ZW36CmcRGGBfeNPFepAEb8edNXhnr7Ga2FGFNYBMfL34enZN1Hz2CWQreysTt8n7RTqEEWmEP",
  "key28": "5o2MTc4zbpbbzKwVRSY15adSNq84xyaRFnKcpBj6sVi5xQ1kRWqW4qy5E6smxqaunJNoC6ua1h46da9rpacG6xZU",
  "key29": "SUSYNQy4NLnCERUfstxqi8DLRuXaapDTYkeaEL9LCtv9WHePkF3GTg95ivBamnvy8agFLZHWmZX5dh9UfMb1z36",
  "key30": "5vmDtaQEmCj8xjLdnboNyKG9pziZUU5rfZZBbRexHwX1igb4oAVXJJrCKcXmPTo3CNZALUJoLu6o9rbuE3zAqUg1",
  "key31": "51UAKhsiiMbzT497PWzHfoUt2UEDmEJ9Dog3ptFZR5Tzsgm7CPXg9hwos96d7fqmheqxV36B2WvHh9KKLw6MKgnB",
  "key32": "22r8TUuKu7UP8ze9CUfU8yp3jaRkgdaGXMNLhhdobCFGRGinfUB1sfSWcqmqWXpebZiC3EahjQMbeWSmKzVpK8ZD",
  "key33": "2nBXLRDReTj3gwCfnzwxnm27nhMcKJok1VF7qU7Sb3dxm5o9ZGjPsCXvGbfzfKXZXKiu9xkBmhgeHb1cVywriNAJ",
  "key34": "4rYkq98XPnoJiapeVEidsNpNMxYZs9acxczzWUtFortXV9L4D3LmcGRjCvKf8RyFvX7dYFGe6M8sQVrGL2HwyXDE",
  "key35": "kmBEFogj98UntQkQKLwQxRsCpCgDhbAAivGhJ6pTR7dNqr8hNZcYVy2342irduRSvSHobjv5KDmJHfVCTuTfVc2",
  "key36": "429WtRLjKSD5Jmp9gbg3KK7zH7etJzTCzAndsg7NhZAhNehdvNn7y67p1bHMcG3ZkE19Qet6zTwMbRZP7QBLAGQT",
  "key37": "3C4RoyrT9neRob977hAz7hEjbaU2Fn5omJr5zerqxxFD4u1GgAwJpCCEUL1PNQroHKHHKfuyHw1Ap8b57CKf1pF6",
  "key38": "5zUdzGJgWEnTWFXBrucG7Qi7tTvpRyEkEBCQsBckjSuFLTUYrBa5AMJL8wwM7hYBFtHp8u4v85tv8pdsGKQtqon8",
  "key39": "mjmM2s4n56QqZNTXQjtGMidFZr4LaoVHQFWFH4E5PgHhiZKdr6CJ6R2n6YMitwszcvXsNgxT2wJ5ULP98EoKaGz",
  "key40": "5NNXTi3Ya7XffuS2H6d4LeFkj66EkpTSEMNEuoYFVAo7MPugKUCveR5obV77fyGMMLrEYmxxbnh2G2NbqSp6JwcB",
  "key41": "5ovgzdwi6JCskXW1Phfg6Az7fPc5Kt3MvJqPy3qCMnrdyKCHGmDSGb9KywibRc8ogN1wzVWFDXUsSYB2xU5BUUnb",
  "key42": "41VmXgnMK7S97a9siWM3TJxVwA5foT7vQWa6XybqLNGDSwhwMZhUTi7iJaRCiPu628qCPjMYn82psYi21TJ4Gfkk",
  "key43": "4mR4Ksaz23w8fxG7EVph1TRzbqkBCznjdG5C1B1HJg7ko3vVeYkgBsNBs642gohg6Rq54rQxg1DuYLeYW2u6vTQX",
  "key44": "36pPNfBEtqWwRiDAkz8dxuUMogUXMP8t2kwjgnyWwXcH6kFmPGsFmKwZ38nfLcqmdbHhNSmTAktVYPLk951dnjZU",
  "key45": "66qi9M1fwnWX8cS312n7QvdEuFq1bwiecWhkWZqhkrLoUVdDuAN2x7j4qzVaBShyXkCq9UcxrE9caAPSppbu6t6G",
  "key46": "5Us5gaFTKC8yYffJyDFucZFnYNb6AwoGJ7Lqoa5p88zguU2dTJBC2j1af7XmFDN8D51LuZsqZnRKBiz4eKghAkSX",
  "key47": "2QSa2hZfeM3xpnL4AXuM4UxspVpUTRdqojUY1eGAZZVE9ADS61wCfqySVV2kgyeDAWHssr5rfJKqWViv3Yn16RVd"
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
