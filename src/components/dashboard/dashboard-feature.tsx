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
    "5Jt89kgNskAUBxTacvTjRR1hHF1swYzEhB8hYSNRNTCqjvBAWxepPWfjbACEU3gMSmZPeGCK5AHzMhu4FSQXEKRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSBjQTypGug9YsgxVKShgcsVb8KqCW54njXJSA64TSKWQyrVNxLsa9wF4Wxw5mVWF7JDPNnBLUv1WwEjebW44MZ",
  "key1": "3dRFsUg43zKRXY1Kcug9j61DCUbQ4Lo9zWVH2fPAaQctzZy7tF4RHK63R227X7uMiqUzFdSEzzkNzVgEQ3QF4Qqb",
  "key2": "5H5tCcsVCBXuyjSsTnrZWQbCg5aAA52FukkbNx9SmzYKFsy2fQKZXseNDbZLhYVpNP9MwN58QHhqL25pH2hS9Las",
  "key3": "5WQAMHUiQCbhuWEo6ZA8iWJdYfNbLBtbdjPEmRCG4maERfcifyvPkgdvdrnHETobEq5AcZfkYuxefzGmWfttS8Ng",
  "key4": "5L6FYNUNe6oGgV25KyUZG3Vdwvo7rDJm2Aqaoa5L6V8sVkWxXFs9XSppHWGn1gB7oJyobYda5XjhvPQ3RgPeZeFM",
  "key5": "4bywgrW2M8MzcvMtpiqqTZcCJfeU3KbzzZ27rKtiuy5Fifz1XvNAwv2iqAmQSiQAC8sEXy7wUahXwoPvTe6MkGos",
  "key6": "3azZ46RvfQDKodFXVVhEJpA7VJgakH79oDpPumcrkxnidZt3auRzbsyEVuXYsh7Wy9s1xqECUM3N2tKWN6VVatig",
  "key7": "39qMT5MPZQ2MGoxncEDvjweDdjcxBfYqztC4cUhDauxhSPkQuKUNgGrry141jaxvemhgyvuBNh8xUekpgKVPk27p",
  "key8": "2vgcztKZEpFM5DsBm4K1HHM7bPAeP7DeyYdz3VySv5PdC8QmHkMimq1DvxPRSdh9Wf7e3WdctLdon32rwEvVV7KN",
  "key9": "4vD3MJst4XXcrytvcQaCB9Gn5iXwMBWXXwaA5E7KjoVgFMdmAibjpJJRtXtLy3yyQtyzXpMC9jyYKibdkiKuJqfT",
  "key10": "3DBJ8m7hGXWgNdvqJkSPF1j1oNyNvx5FtZYZ3aYchh8CDUaxWhPe3T9sjSuRnWhxmNJWfUVRQE9PnE98pZsGnqBa",
  "key11": "2qEg5bePQF7dny85oNs3g2R7aLQC9MQrqFqzzFKWPZKGof8xgBK94vxBKUJoAJvH5VckuHov6uMNC1jeDgwWeEnL",
  "key12": "LAarkCKHVpdPm4MEM7CwoQeAcV9WAJa7EHG9cwEjW4o5wW8H27NGUPNoMxfoUM5DtJBmGAEcwRMhuWrXhZXrUws",
  "key13": "VWvoA3XtRWj8MKrbVfwgHf1b4o9qjG3zK6SAWLy66BdgqT87hJEPQRfiNqHAmJFNHYGyQyJMmeP7FrTJ8sx36aA",
  "key14": "3PRfWeoNxfitGD9HR8AVaXfgG3NjLJ4hspBvmY6vFCyGL6wzsfEtsMLZGCgfNCvwcejiPZRFfYeoYwomNQfAwxZ3",
  "key15": "XKtdXNm4KWjaGoWtis6MzPHWs4gAAaqCBchB8tYdqWPhR3ULge9RRYtrxCiva6ck7VsozF5TE94cRr5mvrCaREM",
  "key16": "5RhDa5ChNPjrp4oc6LXxj4xkcG7bd8cxX2GBfSGmTAQQE1qxiuNNtDu8FKFHJq3Dc4JRQTUw8MHNbQdM7swi4XwS",
  "key17": "2WMWkGxJGF5stqNHTsS5cRFoWHyWYy53VPS8Yt1ZqL6xLGqFnTECjiVxAfJJ39vqv7sDPiGi5TPXvJBZkttXKEp4",
  "key18": "4d4CKmD89UnPFTbhvuZPQKSXg8oyCEzqioLVcaXYgDxEctkNqPpchorviFqNytrF133apcxpR7KNTwEz9HkLGzwW",
  "key19": "62gHRdBcdfEy33gGQ94KwKXFDsgwysez19NqDeFgr2qAsJ9waLEe18PEBa2c62G3ZJ9UKTAcgBFtDEPH3aNzzdN",
  "key20": "587BgEnqcancnQTErcnK27u2eqd6GkTDqb1GY1Pb9uHEkFuJeRVtX4PGJyP3VS5cNgiCYKDe9qb4ZqbiRZVAicH5",
  "key21": "3DV9QRXSCP7dWd6ZYCQre9zz45iuwev2R8idpeNF99r6ozMrueEYdpqV5masEgLAMY5Fwqhesr7k5Dc4MLdwXNcJ",
  "key22": "4r3YCjCaUqp7NcSzpgPL6uJnwdATanLcYz9FCs5sAmpAimiHKQK3Lhpa4cgFnC5F9kyAp5ffh47gBAgmRb8q5tMT",
  "key23": "BgpJqA7BEpBRApvCsLXHn7i8RFSMDfFJXiZRub2GRnwJ4TGh6G7m9x2CW4kfEtttxPCGbCDS7NqnV3tCZckDzMx",
  "key24": "2pjJDs66LUYTLe1dnnKJVEivqiDaCu7kjdLWELY9u15qFAfmUTZbDHN3qSUfc5yhfCBVypsQH39Trm8Sruz8ebJz",
  "key25": "4C9giYb98WMDv5JhVBvPfkM73y2syNstypzTmXo5Z3NMS4i6Pb49dnN39G4T4kG8wMcZN26xv5hWQUYamU5jgPYu",
  "key26": "5kQuvELqYxPGwchoTwWRNnquQTSg7SXfiioxt2KQofxAFwmKDziv1EDd3HrPkrnGDEd5W6fQcL3wKexkJqvVVTiq",
  "key27": "2S9B8YB1nL7fhHJuHWHEA8Y2TaDCJKtYwQjYyLdapriE5sa9KTsE2SdbEQju5G7nygp9CDhezjTdmTqDrSh2k9Jj",
  "key28": "4fUvaJVegmhxS7DQaKEUbb9hRoe5C4wjHHXvJLDqHATRsxia1eTxHobo8LFDz12TmafCAUC31bPthFPM6P28pjWs",
  "key29": "5voQhYALPCEnwRbGpwekzzAQW5zRKnTqpBEHKErzCtSVzWQDMT2omm1ihcVeKZdFXJJkdzJVRj6dHnDQyNDBV7fc",
  "key30": "5wvyaAqAoVzz2Djs5fWcMioeoMY3fjqtx9SFKawc7kft6GShzEDUNczTicFqZ1LgyntN2VX25a8Ae5BsPVqdF5qe",
  "key31": "2cAfoymJmpdQSXksBHPfXqXiKMWFamfwPNFgc2cBgiLL1Gdd94Kt6EjAV2WQXd4ifWHHrQ7WoSPhvosPS1J3QSjg",
  "key32": "bmQ8EQZkZ555SfQFEwBYjLKPn9YvaMJVwhMsh8bca1iEFh1TaYG5eKTRshBAx9XfDFBSFMG3ZDD5cuJCaeC6fnc",
  "key33": "2FaQmSipBdArYbVQVmPDJcDwP16dPpsyP8v11b9vP7Z9rqg8ywizhhiqRQ6FtwU3RCjAHo2B6e1m4zNMoq4S7mKY",
  "key34": "2cwsgPBp9DH9D8VKJEQE8RcSf5bXo8x2BStpwzK2u6GY5nKjXZpehkXdXbMMqzGsvxQqpZppH2pQhEQarJrcY1Ne",
  "key35": "Nxx7REdSNMN5qnbBQYhf3nDsj4M47NggiuN2ukMVHdScqoSzD4LbRYwyQJj3PQQ4aL5RnaW2iwm8rHShdsAJ7BL",
  "key36": "44nSPBonHoiyMkoTT9D2kKdnC15c64xKrQU4dsyc9tkabyWbx4KoBpvhu9bzSwax8afB5P43Vy1a96vcoVtULEUV"
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
