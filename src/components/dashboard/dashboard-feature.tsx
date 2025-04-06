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
    "36gkY6cSiZAQxC2R2EzKtEZYwkHfhe3miJUoqfck8NXtcGwRbaQe1TFzjSgLNsv5cLMTnwvCaorN2MwWjmJ6ouZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QE1yut46RPJ2acdABFFt3ArWSKs4N4iPn95TW25zaWgzK3ydZVvDyGb1cpL5cjAZs5bG9QN5TvxaNUmyBMeWebA",
  "key1": "KWmjjx5vFxptux6Euv3up3VrBigRBxSXGSygkgJYDRdKeRZqb3voQPUKmYptoBQRxTiLbJRieDVaATv22yFNHGM",
  "key2": "2MwrPDSAD1ymCwAg9iRi9c2TkYkh8NYgXGUhFzztFsfQXT2r6cxhr6eQoS79Whn1eg8yYQ1zanR7h2FK8WkoXYQc",
  "key3": "4haiiTzbZ3W5TXnvymm7Y7jE9udNcDepxwBzvwZhCjPnUcrh4DGqfNgpvkT83mAxN8Tc4peroDEoQ681E83Rsa7C",
  "key4": "2QzmpJwBRx5ETb9Aga6q26j9vGWjT3iDEmGUuGyiQSjKJAor9T3AqQDcHq6MJoWE1XoeDuMJFEzA1X3mDdEaprGp",
  "key5": "67b8TZWQXbm7fxPcQw5vbjkD6c3VtJBt9sQz6Gg3ES4G9G7sm1fpxyQMUb1ML2sLchVfKBwiihioWK85K76S884L",
  "key6": "2YjVWKtumvW44RURTx5hpso782Qn8bYq6jskn7VNzwVYZ9iPaTD6G5gQuqyJDhqbpkBqke3e1KJyavnbJ8StYTH",
  "key7": "5Ny6H1noFoZikP6e9kXhqfudfQmmotnyKH4BgfdJ2SpnATxjX5pLjaihMNVA3ixmVgcXEXPah7SrWXopC46JJpeA",
  "key8": "2KKZtZAgs54dkZV5MrrAJAzXd6EMQrasiCoRmmiYaFC8zBwoNDGXHBXVPVh4orPuCqQeUwxKzeu7Y44bdBvM5PtA",
  "key9": "w6RccKiA9zkn462bsN6DqPexTdCZauewa34y5pyyhN9E64VBiXBscMh2TBe5MTcBVraosqNYDYLW7TwUky6i4Nf",
  "key10": "4XieKUt4b6ZfbCguknjJPy5EBQqixGN6ox2y3cwvwJZF41V9TtoDE9P2aHKWRWy4hFL2u53ohqACJHjvjS96D6Bc",
  "key11": "LViDmRJWJtc4TKMGmsumSCoCSgqLi7Fc8K1qzRHuhdEXXrMWyMCAYKdzkFZ7h2h96XzkZhxdznzVjhWmGAN4JvJ",
  "key12": "2U5opGuYFxTBbYUaSJTmGEKnNfCNGvXG1JTiDYKNvVG5szqpGZ1Kz2oy8YeKxt9k87pjAMjBN5r6BfTrD2UHqfYL",
  "key13": "36spvcuhSotC9aEWcBEwf2tB8ZY83R4fmjkV6RmgQWwkNoP3PmyxgKdEb2dcKJs4bRto8Jchco34sDjHpqF6EqKB",
  "key14": "5vF4NzZ1fikq3GKprHo9KH6rYB41tqTHh36KD5tT3DJGHr5T9brwa8Hiy1jakxvnJHKRnxz3cNwVRXmH6JK93FnU",
  "key15": "39ApDjQ5Nf9rJNqSgLXTxw7FJjvs1xzgFKCS9LZJqgMBb8JtgSTdUCyhjtVd3woHkUH25nxf3oShfvvpnXJwKAnL",
  "key16": "4yRPQdvHPJPeZf1DkuYkDHkGte4u1YRs8UmFq6PMgLZLDKaAkVSpFZ43qM9NapYEG9byuoWekj2HZ3aEqktUyTPT",
  "key17": "4fAeczP2RrFTvpkL78AAVN2o1GesAiFs3MKgENiVjiNVFDyVdjYMHQXp1Xx2zX48fEMJM4jLV8hynsTXVpN8a4uX",
  "key18": "2uJi2dVVFNMcqyEH3zSfQqfeKcrDS7vid8gNihg592mnMbBLXcEQ17bF2h49iHq4NnZkkDeVB9hgXAN7JYUgyedT",
  "key19": "3HPbPWPMYijooNemPqZT86vBgqiruZZh1L4i8Dj4AzMiz4FY9exjMiGuTuXUXT2DK42mLe6wRpa43xkSaSEKmY2s",
  "key20": "2ZtCRyECgkqbgrjeetrLgdghj5rbAgdXQKg23YkNEj5Gy3UZ1Euu6EoXRnFnJLbLq7LHpPTzZjc8t9HS9a1gxED9",
  "key21": "2w42LVCJVyi7jpqsCe1T2JFTTxVU328WfPnk2ZXS31A5H8vqnMjC5W8a9bKb4U5Rypoe2gLgQhLA7NHeMuRdW8uY",
  "key22": "5FWm38o4zYXrHoL6MsnkpeA2CqDQFVqeEZLAVupxEJRiAtzWJSfnvMnrTsirhP3RoHrofAneNzQFZjPX3y88QCiK",
  "key23": "aNP6W6e81JjwkNgqNJjPwaETVnXHD25mnsA7f2TMDi7gKzUDJD1UpHe5H8kB5d1Zezzaz9amZXGyY9MAGGzJXSa",
  "key24": "J1zZZ86e7jU45NHyzCCziWzUHDSsVU7bDwBUrFEd27ZcCP8ZZ9xHT6JqzvVnirVxmVY5K2aHQcAPCapvuCkVxPY",
  "key25": "3uiNT8YnbmCTFHH5sQyV7kJ4APHYBS25AFsquKdYgcAMSQbiv6i2oY2pSPRfJa9asVPcFqbEwUhsi2gPYaqUjGpf",
  "key26": "SZZphib79XWfi9ArdybimAgn648nL2bXhjU6wqoM1paQgs4RexaZ4ES6QcXVVwCkm3EveKC6hzE2NSnLN5PKtYi",
  "key27": "3jDNUoN85MCueA6XVPDeNWbPcBSzwjj8p7dehSx6h6AFdDey3rmGKqaCux7nFeJqnTRXcSqY5sSuAvxo45vgJ9Db",
  "key28": "2TqjmwxG4iDJBWdVmiJbYtkCZm4QYwCgodbZ9w21bAdQu1DD2RYdwAKfEgrqKLGEMQzVQiA2saGC69GrhtwUxoJZ",
  "key29": "5XMmowZsLqmyy5mqD2yNBcSEHS6XUrP371nXebH9NRzJ1EdMvb6maNuUaPzhWFKyPFpuLNLZSMxrYxi5XKrbYmPk",
  "key30": "3EsqREJkY73iY7gdddakKkxfAZmCeutrkRFHwz5Jkx5D7UjvKtqvSow9r73D1iaUZjtnz8ggGtP5ucyJ2U7KPf1F",
  "key31": "2UWX2RhbkSZMAURGFnSVS1CsaoSU8TYHH3CkBbH6vSCjPJBvCVrGy9KJkKo2dBtvocxM5hcNi6YU8mpxGyAMeKms",
  "key32": "3YQszenCZ5rfoetMBfixUJ8r1bsjgku1kWRhPsvFUWx8aZE89hBK7gMisvmreZ2HizK8eSGzuxNG2AssritTJsU4",
  "key33": "2s6HBmGxgbGah8br9SiTGYnzqZZfpu4e3NcHuCvCB4XKJswetRpioQ3gxDhMjSpPUP52buzQ7KdB9ytCEUywaJmb",
  "key34": "3LR5YR9RVkYQT7XvDn6HzEeWBRgf4QSbE51vpa8Zwq6WfiRv7XV8nSqtFJjzPg611YB7BQDD6AKDc52nVRoVH3iB",
  "key35": "3tYqXBftmAdccJsGVXnaPQDQfQrMX8aSNKSgaS3MDSd1vgEtuySCS3FYxNZapP7vfkL98G7Z3dMzj9hatLhZ8eLJ"
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
