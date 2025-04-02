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
    "2DCnsFNR4stJF8aMkB1FqKcxVbGLWSxNwsvoBhvQ1V5KGmWXB2xFkRsSMKDg2UVPMBvDyY9LwH5VkuqxgVT3B3sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDKSUarpYCMG33FPCpekepdgeqcdrg5SsD8KncmQeW42TLZMXRj4tDM19byZsNNUh66jNkpfN4upLgzqPjMMV2A",
  "key1": "3Z5qtrFzP6WdgfhxCbGRFxnynTa8beVF82yQGCJ9Y9vy8PEPbrkxjMYLve7ELKzsqWM7XC42TsY72HZDgbeKjLNE",
  "key2": "3qXqn6fNd6CMRJfx77bWFHCAo6YtoGybFGhotvGMKGNurUh7TsDRY8J2otRpQQMef6se53nJjJDqWr5Psgof7EXy",
  "key3": "57Qn31t93USifgPhFapKhtLYTPY9nYqaitcQANQ7HprWSuMdhNWzTpvhrRBaVMMFiKJJcNXHjJq31HzY6pguSMZ3",
  "key4": "2pDriYRJ4oMtT8uX73dkukk1zjHn3f6XvUK8NzSu1saGmLHKo4FsjNSvJSs6KNjS1a9YXbqKmk9iwya7Kdzb7g4u",
  "key5": "56tNM3yFJb4b41CFr9TGv9aw5Kxy4mXEaoPh9MWjJFVRiXTaxym75dBD8SKQPX6QzbdqXUte29f8iybgHZHebFZC",
  "key6": "CXC1okb9swykmn5v18b9ttZgg1UPVc9QvXLES2ZuSijrmRg5cCFioeKZ2mU9LEpPRSXdBkfewDLb4paiw6ZWHR6",
  "key7": "4hh7vM7XxXDp3VSp9eVLwp6X88NKyjzztoo5ArcczPaV1AMu7gbsUVvnt1mBYQPKRNU3uRFCfsE5z1jtBs31T4zP",
  "key8": "2rYeiqbnvJL94D58RN7JmEBWfcpkZDYFQbV2Y4dmpr9Lpnixn58pGx42bA3umJoE91qpCvSACg8wRJ8mGegh7BHR",
  "key9": "4bcePScsDoTFk7qYxwuCmATz2xt4fW25skfAHjd6MercLbJK6RKxpBqJzoxzWKe1t14gn2pMay16ZKCk2F91WWHa",
  "key10": "5SDsxU8i89mztTki2fgrHAbWookJLaywuTjBs4bQLC7sC7DtuuY6MzYLuNAfYveisGyXzmiy4wK8pTC9HzqRbDU6",
  "key11": "2VcPNrKgQSxep54sX21Dqd1x6a3XjV64WXaYoCjjWtnYKr2ZEA2ccn3hfGT7o3dfxGYux6s77NkF98Sh11PXAmuf",
  "key12": "WS6bFotjqVW6gDLpB8wddM7SHXVA1b9Tf6tnadVTfDLYjNB3L8FAF2yvvmVZaoqJCSZzpXTab2Yd9cUgL5QSES6",
  "key13": "5oiThCLvK9ZBR4oVRqqV8MzLw2K34HeGSHx9zJtdX4kpsaovt6YsxGetgDuwdyhue7r8WNhZZjnw44eBZis4Ymfk",
  "key14": "5aACNBfGQbqamJELRVbiAwuhE2H1u5kihUDgGLyyojWTTKDbPTdj6UUGNRD2H4wWkJQ6xSB5KfbEgfAG11W4cDsG",
  "key15": "5C1VbiL5mPrGJk3rroQrR7ujD51nkaiWtw6GAGRGQkjFg2DRCshsRY6AnanQg1FyxKRxrmFpg16yRcJz7Ctnsc2c",
  "key16": "3uNNgeB4bC9eDvam11fki25UBJYkKc3thN4QtB7NwBCMewKBoCyh92eKhNT41tjeUMprj6ovUJec3M16Jq2patY4",
  "key17": "5rr95hQztVWDWDKuSAscDYeePZiibXLzyT5nDGaPaAVr6PMoCLF5KWwxKQsEAuU3B3a4h6gZ5hwzUwvqqYLYaNFT",
  "key18": "51y3GFA566S9K4TVehGg2WaKz3krxijRdnTH2s5n35Ycmuf2cUEqiPWf6Vzibd2xDQ9FUkXe35yP3bhu1JXMzcbD",
  "key19": "547tWhKb9pyGBtuFPGZJ7AoDjC7AptP57DZWttfM646dHtwm3tWk5u98VzmgPFGdTBGzT4mmBCcuQzsHYnjg4dkY",
  "key20": "ETX5XbFuAY59yCuzNomKzCjAw5Ykb1NRhiAUe3CCTVPymBgkpGrdB2jALzzgFKG7Z5Nwf7w6PJzXZ6zySV3F5Qs",
  "key21": "5u23a3Q5YrKQAiJv9BpUEYJjTCKmk21CNbba46bLLw4JwHtooQMxvEn4jQmztHY8duLMEm7zJpSMZA9TQ5V8A8sx",
  "key22": "2P2YGQad7PSBDbGNLu3WT6ak6q53nPJDWfuh5zdcUQSPXYfpa3sVi8VBNeGiinbumaUXNRbSL3ztozGRnF3K3ZNx",
  "key23": "351t9kFvh464PMwcpw7WUMaDojf3VFCfVAsRBaGwYxctCDNyTg439TjtUXqQbeJu9VEqYpo4dxVcTEgKvmVaLqrD",
  "key24": "vpHoubCE2SMYrYnUkNgS3VvHjFdjNyDBdyaaPwptZBPcNvESyQVkMmUmgDx2eCyQcu9Nebre4RZgXZDovwbQsQP",
  "key25": "5Kj4qvHWgmtDJrdC3snHjQFSMYzVie1e7Z7cf4jkyutvU2QczsN6NbWRocmJiCjHT94S2aPJ1Bd2Kca7yCHmWmkF",
  "key26": "rEBE8mSy4a6hGrs44UyKBWLmx6ebVoovxFDu44pe7pk16hsy9e3r6yxzpt2uZKBsdsJgu3wQiWpgxNfkArfeJ6k",
  "key27": "27DYa6gdjKv2QFAn71H4efcZHNkbRiHekUGeSdiNtiALdu21Na4QveDB8vcjXp9wdJA1wZ1GrPCkP9eg89A9rmMY",
  "key28": "34R1wL342mpWKWoAEDyarXWDNpjWxR5fa3QSXoLPFkpq41sUtRWxg8tH3EjSoe6PzVPi1ezxowpQuryGpDgTWV13",
  "key29": "5GHnJ38cdPWfkMfiEWmbVyiBRy8YtJvCzBGv6uJMDviwaMF2rgeUKXirYLuDGD5d7eQKJaNYrmCade2zCiHC6EDF",
  "key30": "3rDgbWjfVGB4x9shvF7Czi5Az2FqiSPoknVCzf4KPs1Sf919oJuwwq9MFnbcjCJn2A2ki9TiU3wRLqw6os58Rb8P",
  "key31": "63KGoVr5Rc4uAHZ65FrqY8PViRpPRMmsuiXLrnxTADGz9U81R3hkk7C29UWKuVJQvgV4QCLrpNo6LwqZKToiGCwY",
  "key32": "53QNpyvCW9GC2EV4R4dAfH5aW4JNQCBxS57tSZqcdadAiuAyqkCvruD6fuw2wYMAft6uD7tdSCd3RujU1NMiRqrB",
  "key33": "UDDvuypahgdfZkHaxKuCi27oSdgGn2sRuEUina9xpZbfCtyqNmwdeAJFG9eB8PbEW84Qo3R44kVpVvSjXbuWhbG",
  "key34": "3eSWqiMtAHTJcdZFKuj6WjWVWjeNuJTzFeQMUdcTGP5jniv2weYoPP1bviX5ydDtQVQRS4n8KXStsQGXfeiLypiW",
  "key35": "38hNPsieLhNgDgZotyCHrWqwDJQzCBQHwxVpKEy4oA8pfcMiz1uMgj1ERetiE6cGAFHMT6Qvg4EPG15TWiMRkf7m",
  "key36": "3mw8VaRRVvHBRnTifEpdDxP6V7CbJQNJUgwQGmMfuP7SK5uNo8HyuQp1xXNbuegSPkMPdZuzihNABJDwRzFbWpNn",
  "key37": "KtoUNTTHftaCAvXXixJrsfcVHZxue9EGDhQeGVg1B2AjpiHCgWWHTCQjiGckjeWw2R4GgmmeJBeztRZqYWoAnPb",
  "key38": "3CyaHjy4oBCv1p1Y1wc9PvDhMrQLAkRPm3mdhjfQjMvAA9mmUa6wY3KuGKwCSWDopKz1HPotYJfiVRB85N7dYhSH",
  "key39": "59m4QLV53fKHAxS4BJpyhuKVPF621kK74NL7HdYQUX35g8dsck8RQpt9qXNvvfAkTLPtXc4vBxQ4MdgnadVBjfLj",
  "key40": "2XPkcUKPXefsKHd3racnMDwCQEPhR34no4fbGLLs3iWJXoH4vKXiW489abwi6EGcSsFbbtQzRK3uwBHSRsS1EpZK",
  "key41": "47L2YhMjU8gHxMWyPEu6wcMGJcavtUqPb43RBCHz51eGHTZU9bHHBBRpGMq3wTjft1mmvJ45MaP1EQ6EuBFLMrrw",
  "key42": "4mFYVjiN6RvsF2GgEqobq3gvCehU3W9id8VkXBDa3zvB5LvBRLyJWcVo95QRAbXS7kHGY8NQarKorzy5q92sKUxQ",
  "key43": "3G2Mu8Ug2iy5T3JA3YQEPox5Qqd9pMqC4WNoaDKtUzfMmEhTgxioLan8g2D2Ep24FxW4rHu7cxMc3dCJL6qF5hyP",
  "key44": "52LCC1Qqg6p7NgzERu5N3ZZj3u8Qd36wkLWkT6mGGLw26hnnKopsqWkBVLWGWUpZK7QGGFTjkQUqdeeB9E4GgD7S",
  "key45": "2M4GdiNbVzGdowBfdfaxPHR1ezDEKzrFHXxFfPMkrUTn3TJHjGPNL7vAT8TtNDSZsB6BntXhjkfQQYXpyE9HmPCG"
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
