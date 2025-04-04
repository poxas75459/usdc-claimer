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
    "RwdMDH1Kx7SUDH6BTQAUr8SnAKSMUEm7AvAGDbJXa61G47WuWcMgUti9bwHN4rBknrnXUEpR5irPDwU7x2inc1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufhit3BbS44CC39ZXeadWUkqguPJYCcLY84yTPca8uxrak8oxPAvShwEojfULzrvrEuq7chPPFN5y6AeaAeed25",
  "key1": "eY3xQCYPt4k9FZSEMVmTBBFePxt2LXQvw75bQzoWhezd5JdjotukVY6Rm48ormgGrE8xissM9bRUca9bqdCTwjr",
  "key2": "3427U2WWN5eAfCZnVVbB1RTtEEz4N8uUG47f8hxD6utdEr8D5Jw8Tkmjpzuei4a1bmZ8bsyGLTMfDpBuc4fQJWqT",
  "key3": "3W3NQsckh3DbYj6sLKCYmn4PAL4V4ZDHbn6nRCiURf7ZCUjdUY9aJQYMHh1hX8Ys3tYH7giEP3HN4bERUNN5t6Z",
  "key4": "yyTNzEC5HyHU7BFoToznkZfVA22nYpwZjecCP4eH3BVcJfP7ByKzVy9xEa7bTDiQCdb6n2KKD5wba9vUakpwqhb",
  "key5": "2tVTSxiCWdRakb3uJuwhjEqYn9UHEEGsmJ2qwGRsu5Qk8XXGNQuxaqnYvCc3JbDoShi32XZFnrVxp9MeY1Rptb19",
  "key6": "4AvLrgZzNief2245dsrrJ3DzpTYrvsUgKaAagwMyr8D6rRzsqwHLEubwQB9Pckc1qmMJ2GKfhD5QrxsfsKjzUBtA",
  "key7": "42RwaMcbySbtDASqANt8tUTpvzA3QiqBYuWvkyn4znCMMddDPTHCTAhrrYYM2cwpz1W4Q2Rs6gPmn3hBUQCYgwc4",
  "key8": "ysoSFYPoBWxHfhZ5gwBXgrQrxZvz5eSUFNqFDKLm1q1ZXv8Mstwx7opw1gGvZVt1xecouKNHws8Xprd9zNqziNp",
  "key9": "65zPVciX5kJg48gBtgqxzPbTFsMUAfrnceo9D3jVjSYgGTSS7EwfX2MAoptoUCpifwAvvVk22uFHwNkkTthHtgXa",
  "key10": "5BcFMa32FkFYRixNqM2QQBnyw6xLc1LURTJYUUrmRVy3iLdfZddEr3B2PB9jybAmXyofEVd3cc1vXQVsFQiKaSW2",
  "key11": "5S1UgsaRXZPyZHmZDi4mDMAJxiFeMrqaXGD9CKmWui9huE1LjEWGsFGtDjcNgVUp2fTLNn6cA2bb1uoxyAJGXKr4",
  "key12": "2LyquLDv8b8cdo4yNyeE9hwwDWbdZqJXjQnoc35vQ3yg3eetoYDgsUeRNsCUgGAYL5AUybqDuGT1uQNwXBnqjghR",
  "key13": "2nKcKW7A42dtK4zHnZD91RE2w3j9dKqY4rnDoMmxMQs762neBrYJYLxvdhXZnDi4bJ4Sk6qio9kaisPtqRErvQnY",
  "key14": "5aq2MMHRbRrpaBjCEWWdTA9thWKB4PPfMNnMj7STch2CFHUr97TqkhwYj1zXkVWCN8LQbCNYVaDtAxQV18wA4jRr",
  "key15": "3Bde45K2AFrLJJsh3XSkgP9aG6SauQzv4uxBdDRhRufK4GQuQCsRoFzYYgqdhxKwsARYVmEvuCUyG7hZ1EA7mXUn",
  "key16": "LeVzPsWy2FKzZDVYHJTNahWkMeAVp3raXUR1hFD2R6zZnugV8d51xidJqdztT5Kf4Sfxm2S4GRrjfqhUMtyWYwy",
  "key17": "5wueE2VKeMW5LXbzSzyeFqyqJLzNqHpMReadeHvDB6CRyFXvvcpnLJbUf1S6CB2otGGy4q9sD65VAwFiHo3qAeKb",
  "key18": "3iZFmT7Lgo3Wa27w2rJ2o1xM4S6BXRZYuRLcyxYggmfjvMk5K1d1o6ZQWNmVfUpaXExw2H5yWAcPKzWoFHBZC7Ge",
  "key19": "2YZnGH9agbJQrgHoMfbugXpQwg168CXKEsNNAHPHPnvUxHaRmEC1oZFi18CsNvKd67LzHP2WsPKUvZtzXTJooEFA",
  "key20": "5SjHkwhnqaQcTtjfHfGED4XSqoK4tQ2UsBCmEiAnNaXJYK5UW57BDyvoXAHBTD6tBTsxcRcbcmToSMzoCHcxE2mz",
  "key21": "29co2uNXd25BcqvTMaTNHhjtPYdQqrGxfUp6FuyNWrj67hBPxKbKwMBiTjRKsXVwnScoXs7X6gEFDjGM3tMt9A5R",
  "key22": "ehtDzKAYAGGafLu2dWEy3SSSJ2eAnTdfrH8Unyg7fSqEUT7KPGd1QEVeHgiZGugPhm4Y6PJ5DVV5k22pKidkRmy",
  "key23": "2itpgcJw6YcNRRyyUqvHtDqsH7WoobYPCKnpKVAZ89WYMM4nJbNr87ZgBy8YLb315EVT9rjHu5qg1rDMhj58kFQW",
  "key24": "2Ctfb5fwA6HfLhS2ogtvuQRVeimRXDDba1p5M4zEv4fkbAonCxshCZG52CF1HuAHmFTFzmzQqGPGc2WD1tJTzkSU",
  "key25": "22wcDurGiZPqEeZfFpWyetTWyu8xg4XFTr7NfHtFkXGmH7zPxPTP5w9vuoZBedxVPQngZhECH1ayK3unM95piLft",
  "key26": "5ZHRBbjQWGD8pcNNWwHuNcMGkXETsH6QVw3VJ8EHbw9F6aLPcDPGpAepCoX1zwKcbT4metTBLSGffKM4cWbV7yaD",
  "key27": "JRK91DZLFjsphEPp8CcRnMZ6dzJaNTs5bTeGtFYwAEqVVDx4uhfJ4Ac1k6UFZ97GR584iXMBWT38WEqhSFHkg7r",
  "key28": "2txxnK7qvHntNSmNm1YPVvehfAiY3ErY9CvEMRjEbCtXFFcu26c42KFhmFJthNLofemb8aUxyrwLi39awRkKNkN",
  "key29": "5TT85qy7A6P78U2GLvQWvnS5iwvrL6ECHJ3tkYH74tXt1bvB2EfgAWAbsU8wP3mUkgGc5PF3TDKn6GZJZVDdmhE3",
  "key30": "HCiBCCuk9GGfHaZZoBK8xZnegtMwt4wpADAmSGxZiRWNEA2ej8e6bt9tCWVW9sivarspKwTPQ5S8JM6v3qdre9L",
  "key31": "441e7yKrgSTJXQV3iNYusmwjwq6oA534ML8ZycpWrwnfB5utQqXTUcgtmPWdcoZm1TXH7KXJBRPaeQSBPPjX1QuK",
  "key32": "46af2KzrnZRSTnsYzxUeSkFnhidjPhAU7jVyac777DCUAN9JR4DFVbV49eoCAijdv4p7xFvtwJYp5GPBeo5xDNf2",
  "key33": "4k4czcsNkpLjPv5LPpEN28vFvwSCQgwWLMGc3wL68Qb9X7Jpdxb39uSEWTu8KgWKz9MB9mvLDCUGBLC7y5j7YWAt",
  "key34": "5EB39LBtsMQ35WnCKjcNRe8jkMfSxiBwhy4u76JXqRLbritdiZXqzeR1vcrovF5rJFh7svhf53YNLnzz72F6NhVr",
  "key35": "UjGMX86SBTUAVpR2nvSZ8HRNnKowYvHw1pGX81pqccWs9Xo5zinFpn8ME2ztTW6kN8rW5eKob3gSQPyxokrcV2z",
  "key36": "4HXQsC3h3jcWcvjaBmSmdG2EjeqgZhN5XNV41GSRxS96Unh6zT9q1MRwCJLDcb4omSh2yLBuCxHnrUrC8Pduzg4K",
  "key37": "tWuBSiDvqPX1o96WTFPgX99PaLJMNhftGbC8UTkXj2AjJ2bVC11o6mL6hWQkiWR96E8Uj1M61z3tbtWsDbNbCpH",
  "key38": "5rQEwzaT8oj8riAmaTbPcXCSA1vMVWgwcHtzw44YmfzoLcen7GpSARM1cDmphe1JE67yuZqZWhmTVPJUogZ1JH8T",
  "key39": "26a6Hxc63yA7ozupjx2QJixNyvMRCgYuH6qVqFjVpkJ6nucpBrZVkDqXtdCk8waa5EpnW22FHoRSbwb6MgTQDjhu",
  "key40": "Rr5PpC7zR2ucQgMkLtgUYBu3hnJjsuGVpVPkn1js8vzq8J9gZKTASfeQX1cDZji72khwzZkxKdssHJ4FLLE1jxY",
  "key41": "4Sswcfm71oekxzM3vKnMyoQKzFXr69BdioBnAs7R3PUcUue2WHboL6eX16RfLhzRmBT2a3ThFRDQRofrBiFNRMkq",
  "key42": "Y2yiAmDfB6LyfchCVSiPbjbvjuQfzjeqhBo5k4L3zNSf8D1ogz13E8PwfbtKNu7otZEZPEL3UuCmQYQBbkxFkWL",
  "key43": "YKf6SRTx3DVDRRwAT24iX1om5EWzuAd9jXWwRNVCfYjz32WB1puZ2VrxS6Dz7zYCNWJBSyfn3DuZmBtYcJAVBre",
  "key44": "2pELvpNvWEEMrmKX8a7kY4TeD11nuQ5r4LrEviQKu917JVAjR4j22AkNc1hYZCER33w9x4EuUbPhqJY6T3T4oUAw",
  "key45": "4codaeHyQhjg4sR5YNb12dKjsMHA6qdFR2NXPXPqdvrVUMS3KvWgr9os7M1fKa9KzqXiCikC8Ccc1wJPp82nW72N",
  "key46": "3YZ3CBzfsCbfFNWKhvuCCZDUtiH3saYMexcqVv6QAZpmDEkn1toSASq9gcmLbdoo2fARev1x6o7xYRy2umQ2PjBf",
  "key47": "2P7VxEvvCW6g6kAAkMzga19wfGar7zgfb1zjm99xHsZjG5ei1M3DRMQD5ETrqzrw9gg7yLLEVbyNdBc1YDSCEXL8"
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
