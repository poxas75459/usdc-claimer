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
    "4YY9UgFNP8dcbZv5xKhEjMRwSMrJ75YCoGA1jWuGq6tJa4kwhas5s4MjpUqnSvjwA8euevjiLGysJaAWQBHV1nAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9kAwpUh4FA5Sz1KypB1UdMhgva5VCuDSKAjvbjmU6Ym7cP1Vd7jtx5eyYvsdUU65nMYCBkf2RNrbUYfHcnTXYX",
  "key1": "wCCfXXHR1MZfmp1CDcDaz1q1AF7Q539vkTdTP3QkDZcBN1ao65uVjj9Bvkpk7dDeCq84NoVSzaLgABEsvELEvmG",
  "key2": "5oUGuSvJmBej1kdU3UMGBHKhRSckdwLp8Za3coYELUdB7JbnNJMg8RQD9WJDJAHvLjoqtCduVccrCte4nHc6SK7S",
  "key3": "5tJ6Hhx5LJs198pSCt8MV69ezqrF8ECKQ2H9RfhAV1oRbvBTcZkarqR2LUmm8A9oAgBNSDkG9uDeXJoeDpUm97Ya",
  "key4": "3hHSXhmFnuTN1iXYcnE3PiVauvhpVJAk7adafnFsyEVBAv8E3NCVShF2TYbXkgQzHG8xBGU1RmXcjCDB6yXmPs6",
  "key5": "3G3hiDqM8REvwUUXfFCqZA66QrHw6Cf6Dw8TosSzwgFVywRi6VctXggpxyzFAF34cnqAN8B1KJ3TAi3FTnweDixZ",
  "key6": "4d5dUWUhvMjQ9J5V3K2omFhYazb7Hyf1SY68NekgJTJUZQPU5nMLR6rUixNuCKXT18soN6vXk1YomH7jbYNEdhdj",
  "key7": "2ibrbpwyTAw6DSAuVkEtWRVuM9V61HhBVpuAwPXjdVuusgRwybEnhbMtSFQPxMk6XVvbVyAjwjKUtvqMVBXKZ4VZ",
  "key8": "E3rBUH4jgqG8AyLGHuhUerQLxDqvHV6HtcAQWCGtaeovHfV6Kvir2V1jHWACsdntPGyZ9JUUQcH3VCKAcT3yafL",
  "key9": "2G1wD5KHLetWGhvQsnRVhvbf5nHFPtN1jjGY2AwCoJUeqaHNyU4vzsgpBfDvSkQHUEzHSro66DdejKDm4UKan11s",
  "key10": "35iYdGGciTKHop88iHh7ErtSGDTd1GGnzLhPBo9WhWHgAxioXnvsSGvGft9vC64GrojLa3ppkxsjYfj6VqA1MLYG",
  "key11": "Vw2qs9KnwVJaKsVXopLyHooYsVJHQJNx5hE1zXGjsSaiu89dVcUS9SnSmxwj6ZJPANk5RX3PiDHNzJQNrUQKt7R",
  "key12": "2RbvBdtCMZHGxdPJRdWr1PPTQYuuXhAoo7SoYQDyt5tsn6HVWQtVvWqXQG2eHMiHWR4VF3i5QTD8UZou57zbgFx",
  "key13": "5Tar63BT6Z6yCPhvxVn4tu41wvFZB3ubdLKtW1SN4qNZAqMCy5JM7JByF2RJDopaFwN3ChwNgvygerTTLYkCuZgf",
  "key14": "oRzNmRa8Zp8k9ZJz5F7tpA8HztewRE9m388D5jaSvswWqGt2JfFjYAkJeqxFpg73wqaaVZS9nSH4WqshQWZ3SzV",
  "key15": "3LLyy5fYpU28kxMnVuFtLa7gPCwMrLHAT2hATBoNc3dZqWJkJH9qrSB4S6gQTqLwepEpr3vaDu4tBXkcLtc2BSKZ",
  "key16": "3tVr5unp8AEv3Vm54DGeWiWZWmcxHMYNcMRa8gV9F1i7UxFiqeFPaVJWfAom5SBidP5KRPPSA6nuXZr6V3yL9BtN",
  "key17": "2ViL6cwHWUw4EJbUrLw3FdmhqqaMSTn3QPWFJUwtvBqoiGPCxWpc1jmSxLv9aSgxjAmSZTzE1ZSdak8xMNYqZ7XK",
  "key18": "5nWutE3RCQ72KeFxF25akwGtn9jcLoB4Hu8YNPjeko75doz663LVjXKeTnkfb3smUZTeP9DKzZoWvG7iQ2E3dsmn",
  "key19": "xLvdoCqF28twQKKoDH6VYfKXJXNgkBsVNrNU4mRXPw5gtURq5z3XgGdmXuWCQJaVamoeSvNCUx6nRUNdvYLGQtS",
  "key20": "3ajJa7vsdvtVUrHwK71khzyb3o1niSisggqacDmMtdEKVksC6jLKJ4yaJeBT6opZwmNz81azwtCN7AevBfR7DbPi",
  "key21": "4k7ZHCicor2NkWmG72eDuDpBydnkFU4Tq8nzBqsJSzBd7jGkoisrsDiUyfiXkXA6NoccFytaoMpDhc269cnp1n9h",
  "key22": "5pXJvFXAodwCxXsp8xamFUq2XhfVPX8sJiX8eRMzvzhVNTj12PqykCEZtbm7L6CBwda152r8K4rDQt7TAFZYj9st",
  "key23": "3xoNTDj77NQTgRmSKcMDAdPH2TXV1tb3qNEbGsZRhSeXRmCbYSm343w9UiUYAyqji6pw4eVr4qgHVcJ7LESg8oxb",
  "key24": "5qXFvorqYez2ASJx8qa9jxCxo6ahatFhcdP23jNgvdhBosLVxSakQ1uSiow25vmiYPcFmPsVA26Dhj5sM19VfcQZ",
  "key25": "5A9ujXdhjdqRTwRUNfs5Vo8JkoNWzE5eBMpdyo4X9ii8jECB4DfB19uE54B1yFc4WWBUNrJE4m31bgm4TiXgukeL",
  "key26": "4W6NsVn2oZ7zXDYc3TAus5Y3p1dKh5oEHUEAx5zPAvYvvvkv8NMTUNjkjTC6DkveDkKS91g7biw5rFAZ6N61o2rE",
  "key27": "4ipbu7CswdPVLaDAcUK9eJDhVeJ3Fxu3RH56m1GyANaMmHnsJPFNip1R8xQis6KvB5c4snCxDncYvN7Q6DWGb8Pd",
  "key28": "4FvJFY65XywJYKthNZp2P2xezpoVQQu2cxkYQVyMVViXjcM2fpJtDVmJRhc7rKgGPKfH1tW6FX9Bv56Y7gaoYwnB",
  "key29": "2Vt6tcZyiNGjsformsc98FEZpUy3dF3Cc8n6ryeVs9MkwASdqFEFumArcvQsVdpxRQjV5gfwXiSQG7prAdwdhVjT",
  "key30": "2j8wdZRRWqup4DiYDH124iNGka4eCD9RZ2REXNAqcfsWzR8Gb1P3pcxa3nv2WbaDwh69YmbkTyMQCJ2sADyhMEgR",
  "key31": "gXbhPSUE8WGFDxwKbCUmLv8wdKg4pymhrUPm9P3uT18XXQHHpd3jm1ducpLrePwVB8xHAAbFYEqZreHMHf2axeY",
  "key32": "4w5jBS2nQxVSThk2oqdxTJtwMa9ttE2QtbiTXu2ApadUBX4ftMUt9fgGVzRNMjcAB7EyPxE9LvfwXxvEbwk3EeHn",
  "key33": "4waT2PZtqLjZNxAbw9x2UbF65Z35NdQdHKb2e3f6L7rn1F1qn2i8c8HGoVWbriN9jfxX115nStkmZsFEvTNdvheD",
  "key34": "3Ey59SHT4ereJPPiZT1v7VLUSSBkvwZ78vNimCU9hgwU8UW3bibqyo4RB6z2nDZcdDXptTivkxbyMu9CL9u7YnB9",
  "key35": "5R6ZYxjKKkx6jwERsFyDXSjhm1TnW1kfmpg9yorMXgL2ofwZFJKUu9gWv1vzPTFezxJLaPSxavKzqqwkg1XZ5Mrc",
  "key36": "3KkDMbP6KnRFGcD1ZNKpJmuKzfec26jXJfs4xMHNszZwtv6Rrnk3sV4ozrQGHv7rBfgCVpDPYkYuroowUXSm6LFD",
  "key37": "5yaDqgqS9pcJfVH3div6woJ1WvdvDWT2dH5KLdxwfBpKDDR2CcsFPwUtyh6CvBpSgCAB8ad8TSrQXRLgJsdpitAo",
  "key38": "2kgvFQ6sbEBakLJFLP7B7XG4Wc4RFdfavkqXGADmUKHA4u8t3vWdiZADhRfh9Gp2JUZSrNvZiatpRiFdMeHPw3uf",
  "key39": "p7C3qZ61zrX9uJSeCsz2cyRwMj6LrduDSwPs25wdniRVyfogrPfd49DJS6vdTYsXWNHcPfQQJzyG9XfqRcE45HW",
  "key40": "46Py7kz1eBBduuC1gR2ZqNW7yce32JWjLQWyMzczjtom9zxfWUJFMAtiVJfmLaxDAP1Re1iqu4EpYuRmevos1Qt2"
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
