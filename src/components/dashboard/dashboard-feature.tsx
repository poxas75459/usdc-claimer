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
    "2zXTMVhdby397kq1qmJsDbWxJBZDzwZcxU6EX6yowsJBy3qmAnfPCGQUh7tSff624cGfRg96nLBBL4ZMLYSoaFrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLy3BULDAQBVetyrpYce3D4qJfPba3EoiH8NgAwhH81EXUurDqk4iWPwAiUo9cd2ravkQ5ccK11NFqSWHSo6ve9",
  "key1": "4EKvMvwDdYCituiv6s7Dg12dSU5rrGUQmADpn3SJ5MZfwE9BixdvYbzqqY4ZsPMNhW8ynAAmYNZmLQaxUFRUBqsn",
  "key2": "5ALTHFvNSCnhzKwXf8nupycgVvMxsRjAuX335vD4QGTZVXaDJoBezLhP5vCzajKhcyULvEA7eybBFT3dWzCHYGCU",
  "key3": "2fogDu5wXbnzi54AB2wTK1pUEQgHSFFpLQJjaKJKcc1YhzMyu77okMwZDWbYNBz3ekXaKrgPP7DDaq3FgdZ6cM4s",
  "key4": "2MwyxhRSq7De1qKZPEzAp6MTeETTJBCChhwn1q7vdVASZeMu2pVMeyj9y3D2JeS4wmouAsivcb7geKVZJG1gf8JD",
  "key5": "61VNxuj8y9o5PUqzem9cTj1Jeinst2MC69MksZTvqchkaoczdPCC23KZ5uSbCpCQyq3hq242dSKLj2x3gsnh7SXn",
  "key6": "EFU1K2sYYRTma12RrZvP6LJTW2iokqAMmr5vXdBDLQPqAh6kJuv3o9UXXHNbYNojvG1FwtTg7oR4qbftuJ1HXrC",
  "key7": "2uLZfrHA89s3CDqBXRCdLsWzaWHv7AiuevgdkopTLF4gaDqLd6SFGJMC8wbrw7BX96ZbnQ3Qs6fVu4x1TufKXUMv",
  "key8": "4nm4iZGWDpaSAgF9BhrH8DgSk3LiqrMTtvUbPUArbBe9NF5LcDatVhVC443w49F4MCPywJi9rr71JrfF2H1WxEPg",
  "key9": "7jeS3i8Wtprk8wMJSMEhDCRM2G425JVTp8x3ZfX62Mxtd66Dn2VG2WHZEBULduJAciMTeHo6wf1vFeSLYv83gbr",
  "key10": "2UJvcpe2sXKWz3cJtojxnNoT3sJwn7RGptPHsmLSWf6VJQPmTiFqLC7wnUNEoJm2Bnw5sDTUVsmveDnjvFTYyag5",
  "key11": "RRVrigRxZpNpYFLg82rp7G1H4kgnq2yMzjvy5EiPRW96q45CHEqjYKJXoag5xZqTbfFxTqoVuHG22kmWCyxPgof",
  "key12": "5oy99MVVu2X22VSZTxXLPgFHYRs1Zk1KyyHkSRTGjEkFJGHffQULpaj6XqMdKXpQUxVU4iaZdgsqYt82mEYa9twR",
  "key13": "2J8ddszSZ4B1Uz8UbqfdNhC7ZPpx6cPXnn4Cvy7rhojQAzM6K6wEvRceWrsf4BL4jLP75U79DeatAZSKYVmzndE7",
  "key14": "63VzFNecbntju9v26vKWKNaMwhY9H7KhLD8D91iFAvmZAqNKtfmfqRGoPfF5BBBLncVhW8WAuhAV2cjB2LDziGZU",
  "key15": "4emQ5b4j2QkwfQGGpHYATzD6ZfiVWfY8ucYm1VHoBLpRdTgGU1TKAMgB45Ky5fkf7L8NYteFbWa5i2QMmX6bC5UT",
  "key16": "nhpWwBQ8uzkokF99CAEJwGhxjthgUXXAk12mieHYErENAtX7M5sbU2c3vfhPRYDuzqicdE5zKgEiAri2enpWNBm",
  "key17": "4FbLYvmzGxMvtvPgvAvmjXJWhnZBLFh7j6CKe4oHAqWEkVxsVPwGUVmZ52csxPgrVKa4hHMTvrZ2Bca3Cjcj8KU4",
  "key18": "4ob1nNn4yLTu1bHoZ3byLqbH8KznVVfPFkjqu24ZWckGqcB8gLNrBxqJconm2azuC6YnxxJCyxjbnxffRHxf4CDK",
  "key19": "4utEPVuyx5Rkwoz5XFkctRiedaq5UMtWwzQDTBAAE6o5qaPwmDvzmbfU2J3Cs4Gt45K3gMTqNDW8vgY2L8BTes5",
  "key20": "4CWwSW29zkZS9F3fUPEcbS2TaazCxyCn3p9bBw4fp8JUcFzWFuaYrc6d21cvHSQusPB687daDVPfs2RDiDeUFF1Q",
  "key21": "3XcyN7x4JaCytsJk36tPruvXqPFMdjMZeiw5qgFGCPQL4QQs6AdyM8r8K51zoPXryBeNeLLxa2gPY3kkKh43b8ho",
  "key22": "43JzCtxFMbuYtJnXjsP1tUSsgJQD8ocNsntywu5yoBdkbhwRUgrtZY94STx9CEcNo4tiJce7v4rLkBrADKyoqodY",
  "key23": "4ecBfxfoq7pNN2zWMYcqKtaboLx7mDSaS7XijUCPW8YFWzFUevBWqLaA6GNUqFN2vyw7hJp1V2TgcyP58NU6BHpG",
  "key24": "4ApLN3R2MiPscandqoTgHcSoey8Kqyn1bPR9Y4wHn191R9wzqa9KinRwTWwV5W4nUMgUpySH7UjNkDsbWAYY58FN",
  "key25": "3aiJPrKC1Q35hYCKvyyYGdDqFZBN5fwVFGLe72JxztAxJVJxdEyrK5d8SabDPqpmcerBC3v7qaPviTotBorrNKyM",
  "key26": "3CKPMByQk3VhEFSCQFCCi6heWpNjkKtf6uQwjxSvwkJe1mdahzovVJhAM1Cy4rpCUWAYenLdWKpjFADQ8wZhxRur",
  "key27": "4M3msSa2ihg7psQxhBJYEhdBvfP1wZBwiK1RfXekpSToSNWU56HCkEaiQrR34nWQwrQ76KiB3m7uL85hEMrvgWyG",
  "key28": "3imc1TFD42ZzpNVWQrNrfxVzt3a1do2NboccQWyG3PJQtDARS5FbmdDGmSex3KjxVEuTG18c3ASxBiX4iBXypgV6",
  "key29": "5sJZsKn6SZUPynqvBTYy9xXBNWvoENRMzh2ggJpwisnyEs5TWXcu9E4EoY8mnfMfn1FiJfYqmB2AW1H3c1NKzhXV",
  "key30": "3B9CzxoEyetpBtw5LHMEgYZQoALTJgFeBUoHFaippvSdTvJMCdaTAHueCGdpHcYQiDKB8jcMRruT8eKex9U79DMg",
  "key31": "d37ifmMoA2Fn5QwkM2ySD9hC6erjJirDqcWd3iWW4VXiCy1UjbEdBH5de5MgvByAg4jc8cFAVVJpJfr4S2D7Lnn",
  "key32": "3AvkPmcCHB2MUVVDUeZpWws7xW5frvWj7Jx9LdAK2VhbS5FKqieYqp3QgxyRVhhL5N9mNGCVHB8JM6VDxawmAXGS",
  "key33": "3ZrUJL8Tv6ENQwohP1LyMUCgt9gpjjr4evUDQ2gWVY3b1CgvpUP1pj7ybqsqBWpTYKeU6JUk3vtFbCzKmUm4mXfN"
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
