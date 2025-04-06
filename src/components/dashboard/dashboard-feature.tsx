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
    "3PRyBMS8S68vTXNYHCYFcn1KdXjSwiCV5cWTRNiwH6w1FP6CgSqD4gfedvWKyauKoTrC9FkToGWaoNgeB2gaUNSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NGfkBcejA16vyKqpBMnxKRmzHYP3sN1E9jLe95Xp3QfuKZK6j4WH6ctNC6PW9YYiALKGosJTFYWDAE4W7Jjrwn4",
  "key1": "4nveRfDsNEjYYAtaQAvz1zghwRoiH1YDycud55s5KD5qXuLuusxNWkSWA1jGuFLijLP2pq8dSbfFVJBDGJ6RfKwp",
  "key2": "43W93cuVEbZes2f2WW8gSxtaRRXQgwiftYMefHwVtPSJQuup83d3UFvykW6Yx6jzKdTE8APHqMwpuPZq6pg9wrt6",
  "key3": "2daJ8xL6CDt9MaaTAHGJzNaNFDm1L63ZMCF5rWhbMoVcUqsqGq5WEbuhKEZZ5TucENpwV8ASFRy8pnAMhSzT9965",
  "key4": "RW1R57CYFXEzpjf8rU2pHgRiW4CBRhU94aNCeAo3aHnAYBjGBUdxJY2nmWLJiHg31WA5JPLgEHoPoiLLoC157rB",
  "key5": "v4szuuPyeb3n8M4a81CEnSVcWQcGJUGMmhrDfBD26dPVdjocf6mpLHJNjbXfFPf9xRK2tQ5wPJJwguZRQtZT4kF",
  "key6": "5sARKk14ZyXV7NizbQR42rTQSw1he7YMU981wvH2CUEJbZS5ea4HBTyvjeNSPXcpuWjuXPrYu7H3A9awYyhxK5AU",
  "key7": "3vdns8afqDxDGkXKPG2KL8wW2JG276XTNacaodEF3o21vRBYgzURW3DP8p7h9GHSXeyGoQmZEXXLV4bjj8R61zec",
  "key8": "2KT7yFeADdjPxSb7hqQ6ALwiesrSUEmeFE4QFkjvqrecubZNgBAMGLNCFzypJP395ZANb7qGtZL5HMcEnxp8gB6d",
  "key9": "4NkSw6e2zbvRSsczxEyGgoyyQZ93Pt1KU8Ats1s5vbqkBwBXazM35A3rJsbra58zpQi11EnQDNXmyaqPQkn2ZD4t",
  "key10": "47RMmmmnWMYsUhy6nmB1QZJcqTn325XJiTMK3MkhdDnAYg3Nf14SLBiqSN73fgy6vB63ZSeJbwXx1akXfZDYZLjm",
  "key11": "WggP7n4YE7bAjGZugqtXDcneqNeyAynPMa8m4cessoXa9LP8R33mMHFp5DCadgd8YnDseWxRJSi9zTahWemehhg",
  "key12": "4pjvqSgkr53uyFPTSovf7ofQeZs4RQmFghJsUxiUfozqJEHL7XCTfh6CfU96yyQ1EfmGQ7Bk9aWWCeV1xGStzV4o",
  "key13": "3CmeEwRWpETXBn9zz7YaMc5yTho4HNox3Df8jSoN8EFH7KpA3TyKZTNrawHF8B3FcGbHYSci8oD5rvZBXBGKDc4b",
  "key14": "51Cv4mYuzRFwU7KJ9fgQ2NmaFLkjMmq3FHxdCJG6aDro6NLr2UVeRGT2waEYsNBQQiuUU2GHEvv1qhyXL9JbjXCz",
  "key15": "5E5uoydHGev73xoN3vmimMo31f7xG7kcVY2K3TNfdUYZhRBLbK8bVpChEvJd6udGgd5hTVGs2XHKEMLjCJvY7m4F",
  "key16": "29L4iimYiLDGTyJiAQjdrYhrtiu4yq59StLXjMtpnZRMXBFm7FKH8yWJ5EHUq35WiZnpqnzHmhLhNMe4cp2m3a51",
  "key17": "5PeGBpz575Vr1esGu5ijFqvzn3vt3Z5MBay5de7Lxq8oq4UGes4bw23gJ8sW6kX1DwZeoLh7DznxwLoGV14ceY5j",
  "key18": "4YUswzN2tkPRUxtfWDvzgbgYPt9rpZex7qJMfuaKxuGHgvCwwu58U86rCRNVRdjhCXNBgB2zi8ZXcnbNLbbmsF6X",
  "key19": "2rro9jnHNacEARTbD6xq1yePoW6PrfLiMzPnu1MBrXmqjtiF2aHsDqUqifWSnEqRqM73yKvJLACxqMWjMMjfWiT9",
  "key20": "rNL2zsaBR48f5Vikjmzbt4EFWycUcNs1tbSZmLPbcKjTSoeAd8LjEfd2qM2trA9ZScc66siDUSCUmF1eacNjCoc",
  "key21": "5pTJV7m2PHRC7nSL1PHCXUtSvaiLL7XiYedGQuxTe3Vj52Mzdcg3mtn3YRFPpsbPdxYv7XKBcDiYpkYYjBovjjCH",
  "key22": "29ENR4gmArTKMfjLfR2DyqCUuyvKTHxXm1EfJeLYmEne2NP2to5obsinG4V1okSYB8DHgx1KqZYEZsA6GhhRyXkE",
  "key23": "FXYZN7uWtm3FHMVbnkL6obtmot9UJMrXpf1bAzoksw3tzNU4aGci97WQBDdJiPHrNKqbmSLSQkaSEkBLZmJtMHU",
  "key24": "bCj2zN72XqSqGRuzzGCfBe7mM6re3ouqYXfBeLPkQ9cLRqQm9TqziAkHqzi77GMCT2LAYhTsPrHuiGHLfUkarcU",
  "key25": "2EpFPkM84mSFyaRx3GWf2ayjie6Ezucw25AXdwScRyPX2YddT2XxTGhArYU8WcBrRbcjFugVQYaZeWbLRYB9BnrN",
  "key26": "4pxMMFt6uicz27vzyARWVoNPZ6eMtCiziBugiDzsakJGt7SXS3ZUjvkyC76DqncFQKzyyZAdBVSJKsWbxpfrdseE",
  "key27": "4yAP6HzAAJePUSrWDt7ME3ipzFqAztBMCKYFe2nKwo34mFjW3coBEQz2XnjPq6KsKgxgzuoj17MgupDMukpyGnZV",
  "key28": "2qmMnjD6MK82toni9rt3T5KvpyVNs9oVChrg75gggSx9foGpBD4HCMKavr8Cj4WsjLknFju7znbo1vWtpzEFxM97",
  "key29": "2g8H9FAwcqkYKpy2yYgXVccnZC1DfLHWs1NJx9o3DtGFixfp496vNtjmqrnDXuDoFf4Ln6kQ1DgYyn84Hz6WPkju",
  "key30": "2NnzAzQ8p8LeDSqsVutHBWh95NkCbHXws6mbfFh1aREVDSVf3cCUeXUQYXwNVq8sNgK9RhGKZ5JbbuoKgxA7eVa6"
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
