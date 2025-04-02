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
    "5GTpR1bGkVkqXq5yn85NTsKrpUMCxCzGZLyx3PfFjNN55tkMk9A8xHvs6rZcESv8CKQGJkRRE3k1gaZED5n5xz23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "edGaeadubuCAa47kX97S9CqcNhw2EK34Txn9bPPKoyV3EM7Kmzmticj6unVJ71g3cwVMfENsUUfgZhwBXenF5MH",
  "key1": "4YvaNTuv6mWhgm7n5GEcXKf9k4L5RH38UGEVEgDUT3dqkvs1woqTSnPdAJtvLFBhN1CkA9NJ2gvZBinJSexsVwRX",
  "key2": "2JsXbm9hTfYBDo7WGU29usbgtMi6cYFA1WBwC7zYQE8PRsMbqobeobzdpRsntShWJnX3LPUQjWj8BsHzYKDpZ9fT",
  "key3": "5XhAVdcFoFT8Qk5GZj2VT9xkMyWV4gdcpH9aCG1MR4KsuKkppDhFki5dzKdr8scnzpMyyfHrWfDdnDUzU825KAUK",
  "key4": "4wVJDpcgtHgA515F1Av4GMfBoFZa3BN5oaQXLo16yQgNtBmR1QbQYMXVSp9n81oLXkwkF5TA5dJFoNi6J478EmMN",
  "key5": "F8xBiSMcXh4vb1veHbsFsejjPLdAKjjTjsxEteaPufJurHnxDW6bbYxQjva9zqH3tVueGZaNhVxjCP7LTtTadg9",
  "key6": "4mFc1DM5KcDbzpfmxex8gPAQoRyVR1dSNu4H3aAmRgR1U2J3dzzUc8rey5ahi5E61wop2YChLLjAuraqp4RPNGSB",
  "key7": "mEYQZurTzPf2wxFmf6RXudZHpS9CpSMdpVnrX6vaxmsE9Te641Tctfdm1gq9hc6GuTzZ2JgNh5BDQ5pssQ84cq5",
  "key8": "4ZPGXXVrZ515MzxktYL5S49VwLZ3uH24C8gvXbNG8WAqUYKbee8SdHqXXUMBVPH9SsoQcASPBWXJrpsrG3zaLL4J",
  "key9": "5kSto1A8RNJ95s2dnPFFSwJZuq2rqK7qUS7ZfAdBHASWohSttd1aFZ8in5SMzvLpgvSbXdF8b3bo34td8VZboPS4",
  "key10": "4sd5BGvPXg8cLtNad8FYFfHr5r8qxeNmQTpAhQsgrCw3xd7UY5etxDZ8H1gAzjoLmcgfhpwYqhcJ6YxenZCwrVPo",
  "key11": "2BE1vgMPAZaNti8AWtbRkcZiLxkG55nxH9VczV2zLMZgmQUYz35n3oCHKhYgVosqc9H9CQgyFaDxvLCbrWVpU7Pb",
  "key12": "HvMP4ActUXbmL5JdXhPUs5oi8VUVxZfztiNySLZTnTkdXYh9FrQrxkPC2Psu4dYPgyV5NM3MWUZ3aJwu4uVivdN",
  "key13": "nq9UY4yskqFeJ5YJucPXEzAi4FajFBMAHNNdY4Ma77gpnWH7jrXy3DcnxQuyVxrxW5MzVktNM9e2BipSyvJ4fbo",
  "key14": "43BRZLVF2gy54BKWTE3tBNsKPdNBTpDDy7jQih7ze52i5eaCRzP18vnNzj7UTqhNgKqW8GnfeKaQtfBAuJguzURX",
  "key15": "59sBwf8vNwEgxSKUUo4CfgMMTRXCgBDfp2YaQzxtQiXK86BLnUzHAh7hyQU8vTpwD1NdgXBRhGsEsHQnBBhfVNQ7",
  "key16": "2eZEecq8FDymLhNFFSrFf6LfyFzs6uTTLmHspwh3QJq4VaTxtjRAFuPkQwFXuH9yuFGWbffavcbe5kU3fGEKSQTG",
  "key17": "3P2RMFGxD4nLRXNmKA15VqPK8Y5Ni7aRejQJStiZ5ckPCFW6f3Wr95pzjqdUdaZi8KJdPiJmY9o5jBXjKNNGTRsV",
  "key18": "3XXEvLVLeXdfAqefD9MyqbJ1quD4Hc87C4UqhsnPTCBXcSgntEkkP5xpEc2CdHq5caVWiweQXa5pVpMgLd1iTUT1",
  "key19": "guejurmF2VssM7goS34J64jkomskmAxXGhEJotrEPW4uSYSfzCRDZkT7g614z7KJxtCMgKpSdoE7hhzEk43iTHm",
  "key20": "2WxYwtFbZKG17dqk9mt2WfFMAXi3mKbZpvpSkBHMGKXEY63Qnia3ab24ACc2a6pjohs61FCvNEaig8KTh9s9fuxo",
  "key21": "4DQ57MDFXAvwYDf9m6fWCRrYiAa6fgDke7wMb72psaDh3qXqos9RBjJhRGK9u2VWUQ6FpwWh5nhmsXXgUGDvxA9L",
  "key22": "4znVUjUZXsmx916zZb5Vzmqi9synMVDMyz6NshBb6CHBgeqXauLNJEeyj722DLxRHvgfXGYthJvgchvf5ahTgmgt",
  "key23": "ZHi1sXF35HN3EKmNeVHPEPmuADG8dYhEaCCcRMMdrLFcydct94u1wFVMYbynecXVgsi7b19myuE5TVZYVzbFAAb",
  "key24": "5zCy3EUL9Q96vBcnVEaMW6eW886x3sM6ERJr2iDK1fNX1zPQ4yLLYXjPS6vMLEAW3k3rp4Vx2hGMYsA2Fq1D4AeP",
  "key25": "5LxRcQcDL2zAB54hSgbL4DjUU2cwZiQMVWmeefbnGLqCaGsXUPpP4Ek4aL8CqSvnVzgDtJhZZuTpki11eTgErYvM",
  "key26": "24e9yFhwHBwesUQAKow6BJenYHDZN3EmunVCcFZpMEPtf7zDdWhdKj5YQuvJhYKwF5xcsaJEQqBRNk7f5bHAGs9a",
  "key27": "2gEB73Ma9F5HgCLrNEj2VF73r4L6HTzH2JfmRbvbk9FELDBrkWi8VP1KR2BKNmZaN5Y5FJHtUgX24fuM2nt6vwwp",
  "key28": "9MK1BiYhkzHBsP2YxQ22q3ugM3pK6s34UMa35iZphskKQ3HkTUafdq2UFyPKdjXDrWAwEcohnkPL47BEmL4Weyj",
  "key29": "4VC5g96LvHevFEDtpzobECAtht36qYGxuM4B7fGkbovB8cFxcrwhNTm8qmdAsqqnb1jYbuvod1BuSBzsAWfYGvE6",
  "key30": "5B1PFSAdyEtsv7BiNr1Pc51BHuS4HAkAFzrntLrFh1CzfoRVpj3UVfn3A5k5VCbjRuAWDqW2Q1TbUm5FUBQ8DEMH",
  "key31": "3mxDHaJA9fyHiNYehwkBhDfgSamGwQWn4TezcJ97QLbNTAxcu9sJVSXoWKnYMyia5t31kZZofVyz9afSutUQn1Qw",
  "key32": "3fdCv4iNyLmj3qLD96HZx7RFdUkNmwJPRB7HYzK4mGfi95aNj36rquwknEE5n62AoaMm7Ti6JYzwQMpwBhUCNK8u",
  "key33": "sArfMp9i16LZe2FqwfUVSPJFkdt2RqcVFcZjbsNAcT7CGsYFkWcwAcrGuUYVXZdxJwo1tvuXbG6onU7ViBUKdrm",
  "key34": "5hRCnvDkB6tQt22tHhenhYqoKPKMigRdNEPHJcA9wFwkySq9KGJeDzSB1xx52hw6hwysMHAymMxwYQ1p1Wot6BuK"
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
