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
    "5UFsF5zwsz1X5SwgnM1s2Yt1pgvrCPQAihvdFJSt2sWEMhBmszq8HW2LtaJtP3GtHyZkU8RdhAdXjHnakNUcWgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L9nAR9pLS1VZV7V5zVHo9JQVAPwrWq3NA1u86cJ3kzP3koe84Ri2rDh8pqZcYtRi8L6jRyAG3NP7PiiykV3rhMq",
  "key1": "3mddcxYvt7xEMgCS3pYaRUd9aEMGUeMyC1PBS3AaawWdFy945LSq1C1qLSURMGSv9aKDsuiAowJ2Lacv8bqgrz2k",
  "key2": "3JWbbFiMBSTnh1ZxKMMoDeK8m8GjFCBjABQpSgH7tGnNkNreQzGW75Y4oMGEr9L5Nv6USQVuNyG1VZt9YExpx3ZV",
  "key3": "2wroP1vnQYWyPu9MJeELnKWSfxfyYNkFd82ov4qw7mHaezPBqWTxJ5BK96FKac23CiXjWxJNcAmoEw8BowD1ArJE",
  "key4": "5v8gf5qfUKmPqzfAgNBCFxhPb7kakW7qBRhH7bEoM1EPgGc19HVAvqrr3RH6cVwJHvyuvt4TkxtPv4pY83p5qwFc",
  "key5": "nCvLw9yKvZpSxT5oEUkANsYczSUYXL3KVWMqZiZjULQDz378TC5QUfDm2vvx86Bpu92LJSXCEtQ6DmdvQVfoS5q",
  "key6": "4edYUHQCdseTrBPYDGcia2CqjYRbMfmdfKK2BSg7FQS9DnZToh8PvhFucKWcpbyaMticn2BRfrfu5emD6VsKYJm4",
  "key7": "5EW39BfmkNaEdLbq5rrUeWdre7v36TUR5F4zy1QVYfxQYa6yvUh3DqEkRCfS9jMKfN1UTG9pTWKR5cQszUAwHp4e",
  "key8": "3riws4WMSgfKA2suTLzKz9wYt6GCAVsiUTrFJuc2cdVnsqViqoVYsQrteXUZ4ufHBQk4cMazPGfDsxVUfy7aDXeS",
  "key9": "3pKZVMkiW3JXPTy4WZ8bh4goppLAiZxA1H23iqQzr2f46JfeweYPQej8V5JEEiPpK5ofsGhmUzrtG6B2X4rm3bTe",
  "key10": "E8HhkHBkFJ1LaRBRmJERTbZnBkd6W3NYpgteMn3RMr8WAwPubifhbfvbj3uFFtZtuDYoySW1nVA3wR5A1hBJTFw",
  "key11": "2DFjahxbWmg3eJQN7EypDo2pRr5dynj4HBGwCHQDyR3TDw4mtC6La9E8KWaq8cLoPUysHZHaVbGUhEMV95bYu2GV",
  "key12": "3kc8FixoQbWrKPFRSWaPqfqojvZF7Ab8nRDWh7agE6W3wbqKUsk5uJry6iu1Z886SWJozfafCvWUwW9BJBkUsQ83",
  "key13": "494ht1sUcpXvXMSRwwktXdQm8xG95tLSD52nqSntFx94EkyVik7EESskPoGgEuWb1yLdePYv1Kwg8EGFZcnC9kzu",
  "key14": "4h5JeJ1rwrXYAgg5zjfjVUZyVCTYSaTJFKHnBinooRyboMefpGAdom2PPi4uoh9Eh7CaoRZ9yEaeUBoUGPgHkAKY",
  "key15": "4TW2C4XzoCQwD4sNcQD7VnjhDBMEChRyyXE6XtUtw1a5T7u64Hrtzy3z1WC1ZBLFe5iVbT96z4fwy7SfChKfe8xz",
  "key16": "59CPR2c2r4UZWaCsn1f2yYTPwQy2afLgGs9eay8zxQeTKWAKvzTyZh6m3G7BXaimx5vCCmw4A4aHQGAE7Kmi8tdM",
  "key17": "65rFtLEJTGfXVJmocYwFvDMxUVAudsUdXRAfoMEGVvumuBiCXnsqyhQFBu2doeBjf2cYBeCTV9yYMhR7x3HeP9oG",
  "key18": "dRqZbCxucYijP2tcQLvwtkxowxfEmFNUiN1TP5vd6JiVwHgUt7MhtgU1FYLn6Wc4t8AHsV5cDLmxrQT49GKGmhP",
  "key19": "c9JM2fA11C5Nh8J8F5HBmarNYS5KPwh9eKg484NURNQCPXusVMRVW4qoCZ8VyR75i3MFYKxGrYBytVCKrPyC75j",
  "key20": "5tzZzDZpHe8xmFgxRhBS9mmJR1RxZTb9CMZPzvi849Ydd5AACNr1nA5h6xyq6bm62mEY7DxaEKXxyt34y7mu1xz2",
  "key21": "3biopRc7HzRbxCwxWA2wXBMfaD9o1DRX7a2bb9bU7t6RaxmyCpte7FYaodKdw1YfG2yUbd9WYWAPhQTThjy28awL",
  "key22": "4pSneWoLCj912K6vsY6HQZsBMW3TsNSgkPRheUfefk1uDYvio5XfMiAkXeoDhyeQPX3nvGS74PswG8o16FsUWtV9",
  "key23": "o6kJ7DeBLMBSQJL9HpRoTAFhdh5gW7GZjeP6xCfG8VmkwhwVm2AGPtnxwT93bsUatveGcuaQD85Aov2voVa1NRQ",
  "key24": "5aHyRSqzHNCbF9ikFvPbHHCGobSApYcn5CzJjCP5JZ349ztvzRvzjuWucsYoWksDtc3TbBWvWiRZfux2DsXzbamL",
  "key25": "5Ltqr3arnvKksmDbJmgUuGN84cZVeda4F5QvJxCebmPKXvcBj5xB8Kzict2fvtmET6KdZedca3ihytDxypKN3S8V",
  "key26": "PyB3rAtMKSUxATwmoeYhoDKuC586JbuEjYusrPrbcnFBTNdcNoegJ5bBAa6mxUYj1FxUMfWDzeeVWUGzT42u6PD",
  "key27": "XHyTBSLNeQAdnGDua34Mke36vwQVcRQ7oNdmQf6qMG7uZH8eGdXpb25FsSKy1sxsAWpvJQrTX5GrNAut1CVBpVv",
  "key28": "2RN5EH86Z4DNY358E9KZA2M85yfFWgvKxuSBA3b52nNdQ41TDxhwaWypSVG1N8UtzsWjjJdRSRwh1JLQKm79SDUK",
  "key29": "3jpP3vA2ubEkPeSg4WXVZxc7QRaBjmCqZGecFkac5LEJWycoLJ2qCna63Ueq8r6ARpSiZFePVoce7T5EG9vPmGrb",
  "key30": "HyWqcaHyoVbntJqHsncPEoye6wzDqHzJ2BVK5ZQqe4hvPUjiKGsAvmFhGCC7JjAh6sNoxWnTcLUguWzFKggCwNH",
  "key31": "4VPfz6Fm2FU8C1uuEWZx68dPyDUWKgZjn98Fx8p33jGbYNbAdZXF9ShP2Aa2kkcFQFFZqDmoSjKeuWxRQEtuHUu4",
  "key32": "5Dk9CVrXQ4zxiyQAXSVNAU6qcxZa7HBzrzR3KGgsx9QwsJUYh9ADM1ChTXzGcGjDBaSB4BcBTQorSCDdAN59PjzY",
  "key33": "3GAGzMGRmP3bqzbR9a2sSoM2Hz4nELW7tL4TySXEqWhyB6hUYEi7wjb7pifYFWBzwsk3aSFUhqhL6t6ZQ7TFZzvr",
  "key34": "67f58J7NYRRiMi3xMkLc8amq5PV1n5g9w8PFLvEuwsqY63ygMxrbRCzhk7HewG96DvepXAgZkt2rZ9raV8vpsKFU",
  "key35": "2C5cdD2GsnPuVGF6v78AX8HC15HtQVJqQi8abYCJfF8yVKwpTozJUPfcDZpJDV7g95fLn8TdnMpERkhK3GpyUHGh",
  "key36": "UqhY1die9gjMFpfa684pJ6HkutGBr5s33KCT7HGmbauUrLrwjvwn66qATqZhq7MecbTyKbqSaRvRcKhqc8DXKB2",
  "key37": "5yQ6NvF6avChMd8JHzQTZvoYs7NwF8LmaatCUvNH4Wy2ZPGF4erjtvdQGYc6kLVzQSoRsijYvTv4TPDawPG5uGwc"
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
