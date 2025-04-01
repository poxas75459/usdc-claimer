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
    "3F2EzgveqrMsTqmmLSLts37iGEdNQi6ovCHJpTNqoM1PpxZBRkND3goCfzBua7JREgjGVQuK6cXwXVKGB1mASjwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXpULifshpNbWdBND31NZinpaSQGJR1ALokuhEfJ16pScrz23sHeBkzYVohyiCmmj85iXuUWQ4fLkhRfMRfXUqt",
  "key1": "4JKQcnG1NqDUheqjEsH2rZkKX8NzgtCXoyJdw69iuA93AfcvERfisgAfsLzxaDGZ1YoRPpWfd11BZHninf3wX9ib",
  "key2": "5ZBLgoismRhUr441Pp5GAaaoqb4EvHquoFzRAPjbETCNBkPHzFC934pfDHzYAQ4AgCULtb1gkkhMbCEbrZVgussD",
  "key3": "5gp6Cqa7467DMAVauQfjMZmMyLyNRdv9jrvtif8CWAUXUd5AYdv1XtoS9vYZ8RtRGVDDxySPfgrb4RmAgjFZUXAM",
  "key4": "PFt2q8sSLGRZvB897mLvFTT5Rn8oTnVuHJRUuYfDu4nj4q4AKQbUgs12zt8eQV4N8y9q2nqkSMdCzg31TaeeE89",
  "key5": "5Rzd2K4afAVNMFaikwb5CLnyU6VawRSM6whj9BSfD4vafc5a9nEfhjPhUBK5XvvwHk3gcusNJg9m4CRR8cPsKvre",
  "key6": "uLxtfYp5bA4pavS8tAG76eCgkDMdFhGpZfcSuFWNpvGbr5ixDdfkQ49YsB4ouSXS7eUt6Ta3ZyVLfqTt3c4gHFH",
  "key7": "fAqummKejqaGKUaVYgwEGQhCgZzMMonZxaMeAY6PzLsiN6tb46CehBrvouPwqvTf3LaRprzerDd27xJnsYPQCNe",
  "key8": "5ffWYkBZHRgUFMSrgKYCYvwjpA7Wbfjun55WfwhMxmaUmwb3Butms59BN3TMMUeSxHK4abuwA5agBFdjPo9be6at",
  "key9": "3hhenQkecSBnw1EbhcihxbFUisov8vks8ebhTEg5heU5mjQ7zths5FVRAELTeSBuZaW99wAD9V7FYudn9YygqKWs",
  "key10": "5SCF8P76RzgR9Bdn6M4tEQffBiX9Y5qshywnZKniUirYtLVsaKayEoSPfWTe3MfcDRc69tDZMLJMyaBmrPvhWud9",
  "key11": "2SLy5FAMaRqhrZcMApLVxJKDD7SPT8UKv2PJahxHavfzt2USGK45SApdqSSNg7vThTkHxhhLYHqpnejNSgRvqpts",
  "key12": "2rtBW7JJH3jjsAa3nyoXTX3hGmthLUg12L3FM2LSdDaECMbQJqdsmaphEHKWxmGn4ARoGbufyceYSLL3qnjMpzWi",
  "key13": "2Fxy2esm8gh7grvZFEkFfP46GFTa1Tu5kH8rjCT3egCSinqc2pUHWJaJV2sUtug8BM3kMFz7vfjmwZvKyr6iRNNR",
  "key14": "5yv3MUDPKdgEySXsC9qiNt2rYtmoa6wg9adec2jpWteWkiVpjQ8kaMfR8Uo39sy7mvDNzSV4531jbTqGcWFSWkry",
  "key15": "5qdZ4wDhXAv2V8PKyAVEAinju8dzBU26QiG1DyZbYZvEcF8KcftkrnLwU2tgvgFpiREmcgVxzX1Y7HLY3GMhkRDz",
  "key16": "4DyzswUtfxZf2ABFdB8hTFihQxLDGixpBtLzdJ1ym3MFtWqsV6C3iYYHMbDPuo2tNxjBotFM2HsqxZbY8shdkH7R",
  "key17": "uRDpsJaeE5RXXCrgZFJDUtDDDnVkhZ5qRzLNfEtTD2aJ81cZUkiXHhwTwgEou75S5swiByEZFoxqhKjSutvV7gw",
  "key18": "2KHdrQjrg94vkawNo9DgEBnhzBvEBjcgvKVLXmuAcwKCK9CEMiZWp11biW8V88QiGDmFiFLVyLurQqRXRh45XsR2",
  "key19": "4Vo4ciBXMEXo5intCsifz1EHyh7Jtj5ktYH7gmynGpeBrEcysRhHoVpHCxLRkfHiKASiQD1qTLuhMWynXswi6Z3z",
  "key20": "5u72qL1MgAho9uUVHczr43fBHcmXEaV8d7zc1tgJzKYQ1HKpHTNYMMSaNfZUuoXVFmskTVikmFLVYdXWGiaRP2rZ",
  "key21": "LmF47p7NDJQMSj3RQo1xZFthy2VzuXpZLpa4TmqM8xnWAFUesEoeA9ZUxRpQLBmbT9VpDgLacpWxeWBL8pF11x3",
  "key22": "46WTszorAREChaJAGeHxmAm73YdXgUtMsscNS4QukNVrGczbYKTKnwsvjVg9fLmLPwKvDbU8pRrRHD2MsN3Nji3m",
  "key23": "5d76FukQu78eRsxZQYwDhrqbcMUgdvmjXvh19DCxDoy1RpNSgtYsc4nnhAmomCBnSk9yKFq7wzvnA2kfHQWB3cFY",
  "key24": "3PzWusxtPCdJVqMZ4PCPzsc99mX4j2NrpRzjNgHtZAoY36MV6336oe7LC4TK5kUJg1KrpNyaAdxCXtwe4Dse7mwn",
  "key25": "2jrkJ7f7eGgLexP3eqbY8DqS5H7rVFakAHYroPoya4rhpjTAjjDQtf1WggdPeLk6a7vMhTMuQYi1nrajqUr6ZWGR",
  "key26": "Gbk1EMi5oPBnPohNtiMdJ7aWY636tJCAkiCU36XN3CqfQFD1KonNjyLNLjGnGbh8dZVyYBSSUQMkqFHtQ1wtPCc",
  "key27": "4bKkaWfWe6m5cJmcmmBX9TsVCHpAcR1EsYbW579aET5a58AurJxMExWxv2TKJ6YNdLyCYpEktShT27c4NGcFsBzQ",
  "key28": "2NE5TKnnUx3GZABT3Rn3RfE3QsZ1ikAXHFC88i1ZEMa69vAVDU1RJUrtsWUoiKZhjgfxKT2XkNxiZGWBBtaYmF6E",
  "key29": "2kNnmrNvygSMQWeSXjqYNpiPhh5s1uST2FBDnz9jCcLowRGYFqjwTc94gdapWRtw5USd5ZkB1vc2CqxzJczHwcjf",
  "key30": "5ogzLMe57T2f7BuWngsrBb7m8zVaSRXSNR6QpnU26CZNKBoURm9YGtXSXMhTSAEiqQMo9CDSF1U4eygvkKDUtcDG",
  "key31": "3T9DdEHzMseXey6uPniJa3rKR3AtCk6gePvFqBUKPBnxBgjZqgiR8GbjMUkkd51AEAsmHXJ7mEiV8NcbTN5tjSnD",
  "key32": "5Qju3fhRmsGrwzcjNaPKd2z71iAyH3BiDwnY5mGcyXPZ3e9Xe1v18vsyKNJUWpsZHByJq6pszc8aoEjEhBEFYBBd",
  "key33": "4cW6Hpo3fXXVEVVTqTiwLNn1Tc1Wy3i33S5VRxUbB5gdfg5CzxXWH3MzLAUbrrTbEwXYesj5MVRaZjcy6cTyfZSd",
  "key34": "5RMbYvHfLLQrMZbscPwqhGAcxBkz7nVF5NbvZ4nayVpseiabtBm4dznF8f3opwHm5KkMrgSBMWGk9kYvtQE1LpqK",
  "key35": "ba5sJpBPWfsBhkZeHKNKVtNLoMs7frwgCDnHmtoHLAe7nio5aUC6aq1Ke16N6AAaoXXzNWy3HYpRGcgQjBxBbPh",
  "key36": "5CYpebxvP31GKhqiiSw5MB4GzeAcHiMnPhkMjCuUwv6t9HfzFnw2guZVaJt95kaSkaMWVNxkYXKMTA2rs6sX4V7r",
  "key37": "5fvMT25dmPotDTpMGRwRp48F1tPeKuhQBPkvPzkmrfUiW26tFGUQp6X1RTtQ16ACKF1B3cvrY84VFZKJTV8kUgQj",
  "key38": "4BxdjQUxbbp6KttYbXuWgj2eXMUQLqfzwXFdAtS9zZ2n6Sqk4M1tCk4rjYGNpXXDhgzCcWMs3c5yaoVWpYSMSWpg",
  "key39": "4RhAGUrzcLuGfedKMv8fG2ceXqu6YuUaRVqaZFmGC5GaECSK3h6FP4za1mrmHS4oUsk1ALydFkeEcuCtbExFPPaw",
  "key40": "3YHZQi8zNgsn8PCgNVTN7d24XMtvJoTFSMGaghh5iZENax7mgheFscsVQWLafCfHqwobi3DWvGvW4dwgPxADncEu",
  "key41": "2KhWuRsPsXE27qfw9KEc3EnAukvxjtRGVAaW3nMT8vvNc62oRjDaz44NzuPopDBQ8Eq21Joa8yQLbqyU4Zh9CqMZ",
  "key42": "3BPQPdA4McFith6SpaFiiyKeYa7C9zBhzGsT3KphMJGMqhfEGMMiAYxsjg2b6BcTujD5NAJHT5QKiZB17riGYvvJ",
  "key43": "N43wWdLcWim8L5vyzxjPBj6jnVeDLEv2Jp3mQgFpuDLeAaDvBdfoWLVAaf9Ag7KcZvW3JM9NQwX176djn1ohBVM",
  "key44": "2gWhJVTKnYKn3y3eSVejcDv146FWmVyqn3RTFVokB9URV1yPaA4gSpn3wE9VKYCHVwYTyuYdkZzcudDZjVfmpmMG",
  "key45": "59ebUUHN6sHoamQwQkGv612wHtoc2F1sNoqSF9yKY2UTmxCfkCFfJ4CS6uKscfqgumxR1v17FG1UVSZtXH5wVNMD",
  "key46": "4tf49TAKkrEuS23j9PNPvJAmcBRyY6Vy4FNkx4hDZpV4QUv6WFoNPJUCtxhqzfGo4BnArLyhLa1hStrKvyExV3cF"
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
