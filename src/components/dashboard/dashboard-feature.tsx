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
    "4vERcdUwi7mym821qSiY1383YHgbs4cu81Ra3vLskDhw4PWrct4qDa5fp5kPys4mBqxYvMGUXsw7PmG23o7qBsH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Ujf1vMtRf7ijr5TQsFa6PnCyL2EpksS7FnivKbeHsU76geRfBshBC7JB5cXt2qfQm2HgmzU6PCWEGJzSRYZhJJ",
  "key1": "w7d63c6vwEWiRyzMHiGX3mzULwwgj7BymCzDreCKdzwt3LJWpc5ejs87xKcJHEy57g88ygPWreJ3KtNPRC4Kz4S",
  "key2": "4Eg9QjzWD4RBNSt3R9W4ahW7pkfhvqRc8wQoD3kbVgHTu7kCCwkuYycDZLSpNKzsRigm1uCrgcCDpCCxknc7F4sU",
  "key3": "3xPPVcU8bkWnivkwksTXhZtNoyYfweKc6RAshz2A8557272WyVu4u5XFSHRgQerfUWEsz2FPBKotdWcfaCT6Kw7P",
  "key4": "3US5PrwwtXV6KFBE1ZJqbzNKQMLWH8csLeZhn9zbeUNrrLy6UH7N9Yp9f2zqFE3w3Dsm9i2v9VEWraEW7Qj2sK6u",
  "key5": "4GkExddWoGkmF4XJhyKtL6wwaGZSb4s1gFBK3UD2YttS5MhkP1N31qWHFhPkk7V8bYpHP2Ak7ez4fcUbRR7F7fce",
  "key6": "3Gh1CLv3qAke55hqajDyn37zYdMA9trV8pjifxkr28q8sZkp1kEWJ5tBGG6T2BW2RNjLnjTx3pnLAkgC2bE9QPQv",
  "key7": "FPXwM2AJLxj1edGXZmefXp8Gwki4FNNfvjWzhuBGSRHKuMthDSR74cSu9fBYqTYKUDYyAzMacspTTeUQRbH14Mx",
  "key8": "2VMnBgvrWimr3YMunFgjAt1gmcjuW19fhCySAc4LnvGkh8Fahvi9p3GqCfr7wWK2Xz3isDBR97uKp5nzsjUST8ZW",
  "key9": "64weHbCnxm9qsX5WD3TKF7ipJt9pkXhTfGLNStKBh2WKuLM1ncNUqJMLAt67WUKrQoq1Mjuuj1V7tDrK7TaLgfeo",
  "key10": "2YiCUgryL6W1oKSHs9aSWy2Srok53rh3BK4wFCAggvY479vQ25Lrs9oEGpBNbjZ2oWgP8qrHV2JySZa58fKtW9EE",
  "key11": "4MD9KppgAVsanAxtVvRCTWGRw6xbFvMKXBGaoUPvsRn1qp5VZqz8PUpgMzYwQuxRjuhNAZMmqHXhDqvnsDpBCWN5",
  "key12": "3R94jhgk6Xi4HHrNss5Tt16qZuTwHgEwXHxE6YBF1tKcVXSm5NLynDZWtM5ujjqoadbfwAt75svy7MdmEbkxFHiW",
  "key13": "5oPr5Nx55uaAnLMnGDmwcbKWP49phPq7BcSDJAxkDNbiGxWzSWz6zEvSCE5QF6ie4q8PJ3ocLSMx4jegjERmKDrb",
  "key14": "9WAJZjJ57E6sNDa5aY2ASPcmJwC3AheThPUL895Ue3j7gJxsR8XTQnrFqKzC1V9FEmBiWt8KcziTs4UHtCQGxL2",
  "key15": "3ao6tPu4o3Yzor1tTPJyNJukxAfChnF7cQBpQLyAjgmWwDE4dkJ9xXVrL6m4RH4T9MsCjVs9KrDMjJrmPhLGoBdQ",
  "key16": "2LASpWPrZpYghhHEUvoAcmThbbQZQvne1PG67Uhb2TnuFvm9ZfbKVMmEJyBL1EJfMmj4C98WMJ1RkgRLt386Qxv1",
  "key17": "3Hi4pbhWGBFV1JvuGf75xT3yWoaZ38qsYqhgbBjuiyQS9n9G8H7GNE9dUnAcGUwS4DqXxALGMiuEeWzqARNgAXpV",
  "key18": "x8zGiN1YNf241QbVPy5s3JSWTVkQL9Bmo4MZR88L8Mn6UkSDnz3JKYaoS1Seo3xWNgu9Bmv4d5qtbSA5LMVBFRP",
  "key19": "2cq6daFmkNpVMko5b4TXkQfRbTEFUfp45XqmFu6YYrjDpYVwTdVk38LF2KJ5be1NB8pUUM5dgch9uvpzKbdLPwy8",
  "key20": "645UsMn4ZQwtFdEhLUQRUCs3xpuhE5Neduvr6zGJPtqD7n5vf5HPsHLbgczpdfLXyxuFPh2LSTU8giQM62Acxwnu",
  "key21": "43sksDS5ayYwuaVSNCy8PYiqH8eYq7hLtbmx86M1Dog8gQStXKpcp9tffB4NZYQ8pPYLCA9Kmk4MqCdr1CRH6jBo",
  "key22": "2bz8SwSsQWmKV9rndvEVJVhXg1yi7abDtD86WLt4jBdDmbGPCsxc1N5j3HdrmGA3nbGSkJaJ4ZMRociQmzjq3qa7",
  "key23": "351JMVWE1eT4y4YNoxjmutzYX5qUXHpNqcFTA1qzUMNiRzW3tkWy7rGsaVvs5YCuKaFenp6AHTKDYWkUASNt29mf",
  "key24": "42skscqa2ScdgpVGd4jpfQ1p5RrjGvLVfKuLmNnQsmJRWe3zQmC9ctzeN39vTtvH8J5L9Qf4gdr3UpuVCqXQpzJ8",
  "key25": "555spYq2m3MB9Xrkx5n4bKMZpQdVUiQNTdiHxCZWuuBsvW8ZQ7g1UNgSimXZvKQRYWpSNvaAoYEKHvcYU5PU2Ewi",
  "key26": "3Bar6WUrdExMbR68D7bx495bs1j4qGp3ZKqXmxbbQwizZL85GHrdWjwwRkp8JM6bvGfgJrQt1M7HpqxTM4BDivwJ",
  "key27": "54yx1NhYasxdZDyPZdmaeMuNPpZTDJN3DE97suocz1m8XBRxm8JAwAtMhPB3kRksz4qYfEPK9CyhzLmKHnLJtgwW",
  "key28": "5DXZ7Ly9KhEi5S15EYN5tGchAvVv6iBNJpfCKgR1jG9KyEdg4z1GBYDD6RVRuHz2cemUno5BBArAtofqvhXxTmys",
  "key29": "5dhQKowLaAueLLk9AD4UmBtYCVhWoMxBXmka3iokp8eCtkfzYsdvNcwf64aZabZnKthdLD8V7DyMCPkm8WNxvkC3",
  "key30": "4FBSbum1FPy4CCd1Qvcb1SwJq112qmWvQmevm2zwd84RUp93kR2yupgTWSqCasaf9oxdzN4B5z377NwURJgdTJVS",
  "key31": "21VrXvGPDYAGJxUQMGJXXFVckweKtDxpsjAFxjU32PEHQpTccZWiDXpd2Bmkq4vWFd1NAriWXRnXNXtMpYQ1amKv",
  "key32": "3Gg6mMpWHbsNebXcatjQUj8F6381WDksUNS6HPfaw76qKubXTNodoBpn6Dxuni67dJSG34gxfUsqokAk3r2mRVRS",
  "key33": "3PnsEvA7M2rDkqQUiNXsKFt2mgXWFJqTebhXXQ4UY8Y5ysEymmKjbtmjXXJC85YNUwVVPPE7s2VPmuDTB7xUZsjZ",
  "key34": "4BxRJE1Qcni61nhTqTYq3vXd4isXApqKmLuxb66Eh4MY2LbBxWog4Sk2zdTezjVy1knAZ8NWfikJM3iG7vRgQLkd"
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
