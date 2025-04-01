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
    "Vep4Cb28dwmcXBWfA5FKFcmBU7TfrtyNNNtK2DjSXvaoJz9PbbMuXZ5neDNPFjqBcAvAKEtXAKZxioS4VcEZnZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJW2zS2KoDRYPHoKSL6zxe5wrLYGy3ZkZqhMkwee4BZCYNCgjMWDNxqiqJrv9jk4toHMcvLrPRQEJUdVnq4S9am",
  "key1": "2GBjMW2mb46FSKTJBbEnuGXk5UXwZtyodgBLS8A8xb3KWRLehnx3AUS9HGjAXgjJvjLFNUtdgPn27ZrMEwCWsLpx",
  "key2": "t9WTqgiFtM22uxLWudynJC9znJLrVcqyBDwLFwu9fbo735KhiUSYvL4z2SKHJ9Wf8xAfQnWwYwxoXccfCth7hBz",
  "key3": "4WkEDHj1X4wbBPCCSSR8dcQ7mhHpqbAdYKxZMZNfJ4TDyLU4ogaBH6ryi4L83f37dVBFNv9vbpvEGPTEhLExYoA6",
  "key4": "4MULb98zCqUKX6jAn1mcWAh7GLYq8iPh9LH26cfAUvuTdeifr22XWFMZdqQWf6NonJbGptKGBpBSSz1zTRjzGPys",
  "key5": "dTJS6XcpEWMho2Ce8LkjLGzkkwQtkMEriyiV2Gwr1M1W1vuXMYyGuHHA3vdiKeaavmFSh8pqWqsq96Ertp3Nw5Z",
  "key6": "4xZ43DMbG2HVdG7TF4Gp41o7eaPTPrCGYd4CLttgDqxchiJv39W7M36GRSeVT8Rf3SF6xTiAeB6uontKJnzqytTu",
  "key7": "49whfos2c4EpPayoHyaC5B1SXzQuqNKscP4v41DAo4eZGgvFbf7NL6JQQxxUZwbQjzJmfnnR814zQk7KsjJgZZLs",
  "key8": "3YFvc1WwMixnw2YEdug1bpFhhj1GSAaap7BmXCHiFAKGxYPEPBeXmG8xiTHUsySJpxgxHVDkCJScFB7hAsLjVqLS",
  "key9": "2or6vFABKLxBsNFvpP64zT7dPC9R5aYe4MqHzUq3CByytCLNgsoiC3xt31QR3dvyMdJpPAK659iL9HXprZNvoepn",
  "key10": "3Q2CgWGrZV9YUKYp9XALZFZi3pvrhMHSgZByrXwRtt5Wg8aSczKqaterPHhVnCqGFmStaL22X96afw1wKNziyGy9",
  "key11": "3aE2djC3kbehYQUkLes9LuSYRQmd9AaFmwpXuw3crxfGQaj6aGEQjK6YxfncstV6jvHXKSQjTyBiptQ7EsfT2WiJ",
  "key12": "4N5jUZ4F1C4rGkSWQWktq656zykoGfkDmhUN6JGEjrgfwT27bWRLDSbAVayHqomg1Sucy6GnH3Zfk5ozaQEYjdGU",
  "key13": "JheRddrmaABwskL8aFdxjtUEMBA3FwRPBuJccPTAfH4ZGQ7jVFQBTK5KGfECD1WgSfnViy6udAjphQWk7kabTSf",
  "key14": "4bWA8ZFo3gMPPPEMg73MUtPiytm5knNxVB7D2EMk85TjxaDk3s4zsWzVwCk976W9HDzf2hHdzLehqcAa1ryDcqeD",
  "key15": "4VA45iCBHbYTcpoKTyEGDEteAf2enTzDftoKsyVV3kV5D1Sy94JwPLwHTYbpeCFBsh2YGhHbtLy2q1i3wfzE2D6T",
  "key16": "3XFpTo4Uiv2gbtmghLbwJX4Xf7J2oSfx72SpWXiDhT1Z3VSM9rJqyCDnX9SCpm7JKSDFKeHN5KuSbNGZDqv82u4u",
  "key17": "3PwThKXoAYfPjupSYNnrBqBuLbTWxxoeZpCpgrbBs3kf5JtcTXWsv6vzJrTahCWDivRX1V6orMSvzX7jZHnC3Skj",
  "key18": "oLuhD7NrtHpDZMGyhaEoyfYELkpLdEzYq6M41f8Bz9VGVwH4SA6mAnac1KvYaLBZEj4tGc6GL9JjasDubkpMuVx",
  "key19": "4qyAYDuNMSA1LLm3eJu1d5kDc77pFgUMPt9ty5pobQVU59f8ieZ4ytxC81LnFWCp16MA7zdfMzaEk3XTaFsCUPUd",
  "key20": "5MnVk6ryrz2U6FQjuYc52U7y9KQ1j44g4o3y39rtKgP45VqsXJm2X84HpVYSkQA7X9QGYY9EMJS1D3fJzAkArPBY",
  "key21": "5jbekTWWxyzEwVn6b8skKYu4jLcavAzAcioGQEk28oYYEPBzgUS7j9efiRn9cyreMGrk2AHL3hHMGuJCBTAF9zmX",
  "key22": "YsT8hayEWkrzUJSj23RhVue52bYZLgX5xWWdCwtf1TStR2MmyvW84CBMC74kF9433BkxW4QPU5sDmMNYGi6dQ5K",
  "key23": "3G6rpKC66pDxsinx8o8xvizb6TVYFi7SYqbKt9fUoq7cAPfx2itsGtnYUtygGZphE3u4aYuB3Jo9FZqMRcr4DV55",
  "key24": "4Fq8aJgs5isFRwZyAYHKPzT9dvn9RT3fEfSDHq2y5sPGu246xpBFJhnstjjgEoM7oZA6TEEJysgWrGLLV9JqvQJu",
  "key25": "TJDZfotx8PhJXeLy3uea5PK28eTACUJffVf3NJ9CMAz6TNbgC27Z9eP7JDB3BD3sZ6yLXimVSs5GrN5TYqWnAZ9",
  "key26": "4Zjmk8EBKkt2U5AcZYNujWt4NEAk5G3bzX8pq3DbHfmmSn9jzcN5GobgUhnHRPoCDbW7HhgrRNko4TRLX3D3cBsE",
  "key27": "4MGcZe4jtScgFt9zrTD9FNL8q51PL9fw7gLFy1exk5r53fnFaG8NYsx3E9sCzqY4vQjxaK1ZGf8ijfjzVs3cSUP",
  "key28": "5rbKC7UDywPG5Zqkvnv8qvt3Td58cc5jRH5UEEBccQvqnVJvtKLNqJVEKbuzzK4G8BMgdejvfGJgEDA8uMeTJknT",
  "key29": "5j8Qze5svGPGemGT8j57G9b7tVkkHxs85thLezjaz4VGvBFKTkVw1WVMsZcV8287hd6XsUwaEi2SvgQLcHJznYxh",
  "key30": "QDE2sNRfsXwQuUeg7ZYNgKnLwdq8gr6BkBkboqZdC3ao8ds9qSCDMDfjiRTXFQ7JmF5t1gtdtXneHfYXD5cy9x2",
  "key31": "3QPtnKxQ6HQgp9diwSfz4m3jfEZQU7kJscGbZCKXpEZ5B5dU2M1TsgxSPPbA5MawGT3Mm9PvFwCim4LujQYQ1qy7",
  "key32": "U57RLyJm7ydqtkyz2Q182ymSnBaS8WAoJuriPcxkcaE9njZEdinLBhBTByLzcpnxaFk5vU4A1BFiXZHnu6hk55i",
  "key33": "e244YiEBc5yjtFVXVRBD9JgwHakKFDVZ21zj1oQBdfATiZ8aejfsaEFP1BviqoVRUviFMwNM4xCz92HQtBVj4HL"
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
