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
    "4C83444nBbXfxB8uHQEH61jKtNL5mXZS661bT9bLtLLoXLkWBTFNi3H8uqcuX9vvBsLY1AyGy6uBbrDyPRwtAJpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sgo48NMDsfb8LgCC5TTKDSYB9u3B9nKji8wEqo5CABxC4j2bGiCNm5gZLhQdACEj8PGFPP9i5Vf1W72soztRsV5",
  "key1": "DyEMBVaxLwsKHuJmyenWVL1zNePLzuzN7hgGgtHKiMbtQaPANhXVLaYbP9MbDjnkg2GKAxd1fsogzcBLo3DXz7a",
  "key2": "qpyuziPKy94mL5ue9uyha1uNewg3GjKoedCpa2A7y8pDXXNDdDL25GLj3ZzqDoqnikBvyVRab5SJ25RxEMcamcT",
  "key3": "5qkmg8acTaiVnyTnDmu6wnuvKhq6Sn3hna71qT5kc3dZjiDo7sQYUWvc3QfBLfzQp2aqcixGqAvFBWpZLXfMbxY3",
  "key4": "2ezFNRfg9yEfXcs1egWjPc7dJQmsAFk9C5T2RDYhxj84pMoxtyiL6bHyt3BLPZj6WGoyjJd6f3HU2NwfN4D8xBFk",
  "key5": "4RUY7Qb3dusb1EhkiveECmcuMhDP6oWy3JfVZNMq92KytByYHH1X38GekjH2xPFreQ24GUeg3oiuePYtc2jM1Cb7",
  "key6": "4J1fsVU42ihDm8gMSE2iqPneUM1uVWJaj3zM3JdnackQsfcdvrnZ6vMFc5JLS2tvsBNVnGds3gD7RFk9fSfxRGmn",
  "key7": "3PMiFhukMVqEiwvcpMTeRs9T6NuNTfXuDbc7JaNZw7MsW5UyLp2k7Lwka7FsMGASxHu9uSr3C8uZbxGvwjjNCNnR",
  "key8": "61H4LyzZAervXDf9PhznPkEjRJ2KSad7sKUnsE8LuStuN1nY9UDDk6D5ChCF9hFWsmastxMDPupgStfeNHP2SPNU",
  "key9": "3dfNZXAGxfEaSJxB3kjaw5Vstj2o4wKqvwvNpgmfvCPb6NsTac6hCN4cyK9tW1ufFajvCyKargnAfa9cAQAskzwA",
  "key10": "4cHyJdWHz87hmg8MzHs7dRqhmkucHy452jSvWYtLPxaEQqAi2eEshkKyozq9cXLx66XWTfJYJnYZWn7imjGnNZK3",
  "key11": "WZFUumVh2VjfyWtvXFLDgX7HFEvNrYg6HMBLS6E8s3wrrqvYHgGkZcn7N31QTNEAL6vyv4XRexKaBkb7uSLFTrW",
  "key12": "2UXbwzxLwcA1vaqDAQw9Fk3aZb6X9cm1VPdKVryzXDM4bHLmWicqfFEc221Cq24XDtDYqvcR258uYUYpPbsJGDm6",
  "key13": "5fYeRDKWEUSUm4fdcp5Q25QoXKPmvcLuHKu5ryz77mVbrq9dxu9bVu2AL8xSpWZphN36xpAzM12QArWHdJ9Q4kes",
  "key14": "48C3NbpmyhcLtP9pj4XMii6QNkjtgfDDrhP6sj7pM5nhq2THxVmFSw1du6CpHsQTpRCewJZBR8xo2ciuk5jCNoiA",
  "key15": "4RY5uVosW5CAxhSxCggsmxqYZahP7TmX8Dv6ZWwqzzGx2YWjtfuY1cYHroWWKXJJvNnL8NhvhYYkoriSPEXmvBSj",
  "key16": "2moUYf5QLMiYNxkU5My5vshXaUFhMKCxGBBbExsr4NcrWc8UoJbCK283aSNije3XLfMe9P9W6RZMAccdNBN6paU1",
  "key17": "4R9urqNBQU3vmwzS4CEasAoYTpqMJysguL7QBkFshVJ2iXCNCPE3E2Eakje7FWwhiRYNpoqX8yPP1CFVdVpNEMV2",
  "key18": "2qpQeWKMuTrWuxtRgWpBsoQEdfjC35iwQGfYmTX8ZYxhRL2kG26bh9jJHkJajE5uCzNi2obs5QJcR7H98z5MxVZX",
  "key19": "wsYVFASWP14MzqXmqe6opQ1eWqBJPTP7jdb9E3CCAthyoJDSjVPKyo7KJwPRvoSH1ip4eEnY26zFXw95bwJJ138",
  "key20": "5TxwZo35XqK9sBcUj5aaEr11DBXmNtPCZazanKVW1fr9MkLwQ5ygcZ5wUmYJeXovTaZ2CMvyFvymrszdDcbBrYBP",
  "key21": "5g7DwHKU6YbP6gNWvX33c8dwmimWDu9C6qSeejfSwDykXSWLWiN3ZM5fGvgHi9JqMtDmns1mu7QcoWccM8nXZfJT",
  "key22": "2EuxSYdP5orRY5oaxaP45BL4yjQmQi6NxCx2MpXnX3jBadnCwuo1fhEjvF7BkRpQ6DbSnzy9RyscjB5i5vSphL5y",
  "key23": "461Y6cs5whmGn4KcRRCcZQS9MfQFXujoNHdFNQkdC6k7kS4HEKVK3vWUmkvGvb5yiTGAc2UeUdw8v3dFEwpXx4xJ",
  "key24": "qDBPt7qP2JLh1xD1fbBCxkGrR5xZDpu2Ufe7ZotxmVndLMLoUsNzj6hsG9CnyivpkoPdzEjhV4CDerawtamRMkz",
  "key25": "2prCUQQYS8M8SNJXu9DsFxbBA5Dvp86xectR1HastcZXfJKh7K2ogywKszATatonpjtiotPJTYPZ5GNUXHYFQ3VV",
  "key26": "55WTp9hyMuDivNJ7QZto63YRsn3hY1A61NcXhvm5Zd9vofJ8pwrakQ5smagNUsY72XMUJL6sHN1GwBF7sQrQ9K5K",
  "key27": "5r5zSo2NVQgFN2sRWLYLfYpeGDZNsMiN73Mo5ND5tWWwkJW2noEgQrvCFKgHZVRFtGufUULvDdqrvgSgx6pVEZ4q",
  "key28": "3WUmBsKT1hjsv6Dg9uuTvF2uZZbr7BzkEcTN9gak7thaMCcpHD39Djn1L8nxW9BRgGbFQcc5RpiLiK8tZsp7Kt9w",
  "key29": "4yEor7qh6w8dhCJa5Ka7NF6ysaAzpQCC86v87CsprTj5bJe29VN2hq4imh8RE6tsuDeJ85wt2mEWftDzBHSk31qW"
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
