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
    "445tBGS7cPDWkuTXpdvfQJz17MExPNME8rcCm3ehB6e7z3VeEkFRpzzEHPQTWJtW4uDm7TAGvUWYcpeis9Vzby3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "455zU2DBP4tbEyyYbuXSpM84vWz8CgxCuKZSbBLecc79gh9RH4SBwfHGXJwbomeAVcNwajzD3pn2GeT4zCFFvpJi",
  "key1": "5uQmeDF14PhbUetgYMBFoLLvWQAvhzFmB5bwQXNkp4UCK9TKv8YintpQ3ooQaBD4ftZ8FNwG1jMzfugGZq2PiCBv",
  "key2": "3U3aDJfjqgjostPLq7fddRfqUw5jTC25tK1Edzu47z3dkhDAGCJ7Tbn2gnuqz2uXe2gZEBykPaKEEBPPApFhWitg",
  "key3": "3DPZd9KDnHmz7ThyasiEaiYA65VvEsRaSzLYEeLQcd7mBgyTHWwo297oG2RnZM84eQGgVfrCtvqt7HoafEYS7kMM",
  "key4": "3Dm3HwPnGg81CxYVaCot9XytPfwDWFa3gXKUXYVSXsCQ1y3vaNNYEtm8ZWaVHqcqFx9iGAxwR4F2Jk4E1ouFLuBr",
  "key5": "9YYdYU822nvYmg12HnY6d4UPg35qa1LukHBpBwT33PT2UYQVcsxaMyPLjNiM21PAQRC84CbC4AE8CybHtvishXF",
  "key6": "3PAaajePPmoerqJwA4tqnB2GRVsa1rjULjPAJSERgBWv5x6nywgxBfWTcdEhQUVXUFvWMs1AbrLzRTjoGovPT54o",
  "key7": "3oo8eGf2CDy5sRDazRp6Q2xLhvqENd3QQY9GFNByp1Fj6ojxB1TQ6L84do3BwbgWD8v8Qqk1tpcYGFFCsjGR2K5j",
  "key8": "4TPDnWgrbXu9r5JGRMa9q6Vy2YYDn87zKATqnGfBffyxWb9bLmNAkASH12b7uuzM4ewq2MhChuhD8aNZhRVbJscN",
  "key9": "4yFjqoDuzv4CNiPSUgYCrgmtM2EEAThFhWZiPw6MapnG1ojNhP98sj5SXmSr2ofVWzoFWfRth8H14cVHQCFoyysH",
  "key10": "3SyNqmLP4GhpAm1ccqeuhDZZSuQCySrSP6NyBiXrKSv7V1r1o9doxJT5es63qrr1vLRsVyxyagXLxtjRpRvDuRXy",
  "key11": "3uANmGJE5KEg5bdEKMZbjPGbAxGBdpPckRfJmTP8yvfizE23eo8pd6zCHSv8usQcQcokJ5uM9DiWM9iwqgvXmHzK",
  "key12": "3VmNiwQuhfpeRuHPbMMbRNpdWNLDVjby5cg5j6Hi11DBJHDiEFsRjnMMZRF8DmWzsJhCDcY2QmVWHtFSkdGrdqu2",
  "key13": "3vjnU45p36rcHeEynTMGtuKdm3JQoVqm1b5FsG5HJ3VJhCD1MKZg1piCVteXfcZ8rSzbq6WnJkNHZH538ea6AgJk",
  "key14": "3V4uARosGGcfBUyhXn1zuAcqAsKhc9heh9iyXJSETE6xy34eW65grUUc6fn4tyCJTiK36YYqGGQRuscUtfmG1dBS",
  "key15": "5eAqLXtAM8MfdEqAEkNCT5c5zxTCeJ7pg8HRBYkjis8xr9UiweK4YrzgE9umhqQTQr1yoiVHvVZRQRkVXwRSaPyg",
  "key16": "g78EwA2U38dkFTrQMSabSZMpj5FX5E71vMW5mnTMy64fMmkfdz3D5A3w9b9yzdF78LnBn1P36jQZ8mBugyzhkny",
  "key17": "3SU6BpU1knMaU1yhMKt6NaZpTAERYQphUo9Q63ahHCuui18ESeCydm7329QWXse6X4pKMPqvibtPuwCipWHQojoM",
  "key18": "5kDmqTzZyhX4jihCC6c2ehZs7xKEgHJT5mZgoxAsz4zfTUTGLsC3kSse7roj5RpGEpJ9f3RLPBEx8GmtkwQwYZNj",
  "key19": "3KwLeK7F6oP5gdbwUNidASua6wfNbSzg1PFMpTwUgWGfCscbxd7zRYvK2LYjuu5C4TWDSdH2BwayzgqjJtNL3Gou",
  "key20": "5G7SBdjqFxgLLHrJKn1gPPGD9Mi2YN4PQPMinPh8b5oF6yPPE2Z1Yh1y8p1BfXsiP6pnKbHEf9HJgGRBSA5B1WNY",
  "key21": "2MiwnzCg3r5GEVgxzCre9oQ1Hr7yE7MPJgHQcXoHHxVauPT7n2cAy5VYkGqvLiUo61XudztoguoykPYGgjyfhoXd",
  "key22": "2UFZd1jKsu5PyGmQKWrAhQUXbGxABv8R9f1pfveME5vGQhHWzuXUf9dQGM2VBWzrPqXffoSoygujnPsap6jCM8iv",
  "key23": "46vDeQya3WedzAQpjoVtrfKQSs32Mh61tKom4ZUCrsDuosqDDiTRqhrA7utGydZX6vs46sAuECs2hMdpZ3NDGvLs",
  "key24": "2j2NLbX1te1WEtS65aNNcrD4BSUjkQXkvCiHVqPbmWUWF3956RPfjz4kVffuJ3V3s5BfNXhZZXnGY1sW5yLjxEH1",
  "key25": "yq16ZyfhEqFCtnZRyPWdZojhV8tqc42x56Lhv8d9SzxmypsXYf4Nm4BMaEnBUu9dgCqKKVonAZZG9saMcygyMnF",
  "key26": "4682z8tfz3aLdxz4KvpjAvMsrnHAWqyHbDqk1gBe3QJycqxHjQ2HbXMx5zJpwMdvqBjtx7qYKhdeUDoK9dkyJ7WJ",
  "key27": "kxDamZrPn1zSzM7tGkHBny3DUkNooEhQZ9V1wuvzjG2cF99TdWyQaa25FJYYHcesoPku54cuoCcf3oFFVYeVw6b",
  "key28": "54Eaymwh41xGLdYFHUra44m9GesJn8KM9gocRALW4PYXR9RnxsYRFiTGxqXXP4b4JuozYa91TEV252tJhnRfMLGm",
  "key29": "XorYYw2NjKZETDHoWp8verfTgMUUTvw96ityZqczStufRNyXzeMPqPqeSzT6gTHNwKTxWpK4Wzb7FTdhorfw2RG",
  "key30": "4wStUJHB2BouGa4gB4uXwwguUpahD6mg7XMcSb5Ns9ny7fpV8gJUMfyjaLvXTD33M65YJ4YtfW31iZrVBn3H5SW5",
  "key31": "56HPkjA41P8gfNn5aqkqjrj6526MMeuC5Z2Vkfb6UDU55sKs81P43JxQdyx4kevoh7CyaM7rLLSAJQmW1ATx8HKS",
  "key32": "4meRNCnZk995gWzc1ozhFWMQMYUe8BeGQfLmEqMTkxQSDvtu5ZFUAhsegKnLBJ19tdn7WyZaTYVzpnAxMgrtxDrv"
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
