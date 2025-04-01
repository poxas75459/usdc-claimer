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
    "WYRKaS4cHHano3sQhRu6iyjcHkRRUNHL6o9Zwv9XLdoWZT8vwsAan5y1rRaHE3vSraSFLC291V8Lv64Cq2euhBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Snk9YSEE26aFRyUj79JCmyZM7jYFmoYBJ7suE1DBbU5RGvtsV4aXcVD9SVJBa3MHnJdudWMVaZqsdv31fv2GwC",
  "key1": "4jk39n7V96YdGM2fMCY3dzfc1XBSoESy6LGdkCm3eWj9b4LEzixsv5LX8e2EK2GN4wmah6PZa5fenxnrK4fFKT3p",
  "key2": "39F4eMHh2HuNatedpNijbMXqNXuet8nibYBzzKvf2qMVp2nJRDY9PdeM1Qc8KyyahQ2UKKT5UazQEirto42CtWCh",
  "key3": "PMfVgL8AyQMB81SHEVa9N2XEnWLvFZyZRFJcF6NdESzKZ4h8mwA7zgtCfYsBmxkLcyEHNTtvpai9PG6bCKg6onF",
  "key4": "4avcEEF63EKn1813jSby4EaaDE7DVAwao3K6SiUaFRZcmwAQMRnCwLKYLoUCQ6vhxkV2k1ZTPNJ2zFhC8WTFquv9",
  "key5": "3wPvdixLB9xk6LkLAyX93Es7mWjSMJFToc1vrDUf2zCqxs1ChEipL8Jta7nE89NgV9tME8LzJXXvyNeeJ4QUuwbj",
  "key6": "3kUyx1hbtPm3eV4VT3euREG7KUnauNhmQokeZDyocqSR3ZbCav8Vtu2x51RZmT1yVH81R7QsDBjz69bWukME5P2q",
  "key7": "28cLiSxtN3iJskidFQWuV6UPNpLsw2yfXrgPybsH6rgqpSLhXXqvYCGiKadfk5MbHhCGJu2gWgRtXUdC1Nk8djAd",
  "key8": "67Y2S8sZZ87LM5gM1VF89m6XXCJWysX8d9oFWfmE2sYRRQquQdyc3pqYUW929YADwywp1wYtAVwwSja6C8RTnazo",
  "key9": "3vfnXV51wNaHajj8saPVcC7vzpU4bVmHegdgBqqUHXAzBANAxVQTXDjP7qByCgYHUeNCDVYiJeDz9uSwGNUQUgfM",
  "key10": "3kv2CYSucdSb5cJvZHJsD7W9ubf3bG4QyAPmZJ4aqbBtTpZ9c7qJhUdTPGMAGzJdJ6Q4YnP8WfW2n6yBPUJtxrk",
  "key11": "3RLPz23yviv2zCDiErjXWGuYtupMjevpVLfE7wjNm17HcwVVpZ8t8FPbmn93owjXgv4tXsFtFAbqZmxhD5SrSakb",
  "key12": "4xWGrhicLcZ9c3Hv5hHHGZbJ64RWe8sjaUAze9kBa1gKj7ZeoLfKVJ2cA3J5YeXfhFaY9EwP8w56TrmJXL4EyQnq",
  "key13": "3jhaoimNpxgkwEbi8N8RGkSetAEGh9FiG3f3kU1YgtBer7ULEzRSVgxhA26HFVHsHxf25tgudZ9P5j9to39hpWmW",
  "key14": "37DfyPtWnKBpYzttk2tDyhpZtjqHoE2vW88ZJDVeZ6naVs1vgFoKieFfU7r7tCWwCRELsSVuCxevZR8zt3q5Rso2",
  "key15": "4iMNZwkHv6s4LdrkmumdoQxZgMenPTf9HWXb6GpaWECjvzRdqmVqMQXBc378fogM2B59gcw9PWT55EnGoWeXZ8yM",
  "key16": "4h6dtQuShp5YpndT3xTULZkBmiU9vj4x6fmkxD7qKobWHsL2EoZDjYDDmYQ1CHD8FRjUsErv8h42egMJVA8V6NrF",
  "key17": "5yc4WYGgSSykpzZhwaJ9qSoFAoXKK9CgmPr41723zx84UQeqNidRqZ8L4z4tumZxdB9soSTwnpCi84gqL6kcGJi2",
  "key18": "pvNtsMrNuD4LD2RPXx8rXSHNdTWStDKL97q9F8HHPa2bqDngTWusYdoqx8J7Gprm52ey17NJxKa5bDAtJ2M9oVD",
  "key19": "5n9N5reiHbAEsu47P63hsJnnZ813BKxncwCNXrDtVcJ9mcgW9JEcn8hFLFZP9rZnUnPB9o19AHdtDVtLTL6MEjK",
  "key20": "42WgS6HwwqGixA8AARkExHm411NhjFMQqFM7BFSxPGKA6usTuitj1pn248Mtm8PdLAtei4L3K9jPhk4ki3BgRLLK",
  "key21": "3aXrMzQoC7ifUz3AhoGKi1AejywNTrUd5tZoL3cckTaR49xu5L3EEiUu5s6TVDgHnHZxbFLw5maKDEBx2H2E1aV7",
  "key22": "2993JUck4iMbCWB5C3qQgkAW5NCQDEK3zEUw6R2KZqMzhYWYyXcT6SQAqaayKBEJV72CrGN2958CWtWoZM7NxtVF",
  "key23": "4VcB84iYNx9Uz7Bjuwf5Lh5AUzYRKnou8u3kdSwSToow1hvFKiBF5pBELstrn9xqZYLPsFjPYBGfuPfn4Uq2v2ac",
  "key24": "pNJyu8R47tXjBUmFKeDJDWTUGUJc3zLfHXzJN4t7Kco3JBPZLhuBHMDe14QoUR14nRejVSN8rGy23UY3CpqiPrA",
  "key25": "3JifYAqxMeNkUi5CSBXSk411RSkKcEThQ4q5zkfvLcdNWR7bdRiY7Mf11Euv9z3RVKB8WF1MXy2854J2uo5v73Br",
  "key26": "2FbRg71G57hPH6YkqanwU3p9pzrFALcp2CXg7yWv37QQiFzmwn3cL4KUPejnZWDdR5dWcSAdpHbPSA5F2APZZ84Z",
  "key27": "3LvZ8rEMWj95anbsv7C3fm5CMPLNKdVEKmgjVsVYxcWgk5P4aAbHhjLao9ERb1igJwyyLBErLSzDwhayfCzAb42b",
  "key28": "3PQYaGcBWJQ6qtDhfcVPe97s3EDEPqLYXNkg9Cz3MUYBTnAHoU5DUuMTh2vaM9gCtZGpU5yvPxyoHqv24MBULFzB",
  "key29": "4pah8sPS6GAoRCuYtkmBQnXNYPFPmEhJ7SyGPJV6hiuiZMeVB1tqLsrmZLbi26hB2DfNmSsoHNREmkXScE8yTP3H"
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
