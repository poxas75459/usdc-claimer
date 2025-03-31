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
    "2a56qPnoeLvVFvBMFMtHHMFdBcafs53Pe8QBhYqH88zKD6jLG51v1bS1ATEwWzhTKoLNZ1snUJXRUWdSKPX3qNUA"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "KuNNNaBkpxML4yK4ooCTigNJ5jUtV8TdaXkUxMoRvjW6NHM7AUPpePYm9c6PcCa1RuPM9XWdKptJAVtBRY1BT6N",
  "decoyKey1": "3CAPNmd69WVC1swfgrhPvCbGftbg311SpiTgU59wqR5Uo3xvUxeuBNBmdiGQVFkowESYnpEagXrJewQ7mvdDrwqV",
  "decoyKey2": "26jm3VWcpgAmhg9tpk1iV7hZBosQXm28aGV2fmGTWEAxcLa8RJ2a1JqefnHwaACEsSQ5NBSGpAHZLVyGu7jR38Gz",
  "decoyKey3": "2hssaxbMNECCkp8873zg5g6ewP8ndWT49QtdxgAYRQq3yTTrq8xf9S4hDzdwuciYnYGnTbLvihxdDkSBb8LUmPhM",
  "decoyKey4": "4tpj1mWmjEr85Ty4VC6fcDo8pcvYex3CcUGkPJ7fxuDTuAycHRgQE3f9kbJ2AAchTJrTJSZHAfYGbH8w6rz3ZQHB",
  "decoyKey5": "51ue6YZamcN11fNvUjv9Y2DfmaXTcBMBLVnHuZvir1mZsaA8Yev5ssazHtQKhA5CSaReR7yipBGkYo7J5P5zztVq",
  "decoyKey6": "4EuehhsgsnZaTakR8CnVdRV1zhtvbWZMHbKWyQZTbLCua4q8ZLLgoQ3pPo91YSCk2RP5PNkrANDQnLusZnNBxXbE",
  "decoyKey7": "EjTBR8CidzMQueToT7GcrDx93Eid88N6ztUgZZRjQfvbixPRd267sZCFZjoo9uwrFUX7nx2pNEwfL7gJCe5icTX",
  "decoyKey8": "5wELdAd9wrAwLsZu947RqBhLsbUx4RzDgQazA33BDZBhvRCe7vtv2s2hKxtYpAD1Fh6KeQ7wJKBwcCi1Mz4dKSt4",
  "decoyKey9": "3sNbWBeYoQ9XonFPd8bqMrXWMtDDeuPompkAKN9nA1RwBJZqw8sS4so4cXErHLrEc8y5HAMYgthJEV86xeRYNFut",
  "decoyKey10": "xGFNFAecQWcu7mFXaqivvBpvstWfJH6vBoqVtQHFKnwizmhPtYoF2zyFCWVzRypn55xL7XtY7rNrzN9PUChvhJv",
  "decoyKey11": "5HFhASzVbk6NSASFzqYwKKaK2L8Tdix8HNogmeWUDLe7wXka957YijmFt8pfPckJ7vLGB7tj94seQXgYc6G2qUtS",
  "decoyKey12": "53UGxaV5PaVwaFJkhLbWCooJZmQSRyYNzFeBQYpSERHisuLWiYCvjy4Uk37jJheByFqpk4zSgQj2UAo9T81LXWGx",
  "decoyKey13": "5EEgTet6BgJW4ntxkzuJinSUKKVk1m8axxbTZCtgHeBEE47PteyXKzvXcV52WRvxuFBpZy4GsrGCGJSoJmEz8YDL",
  "decoyKey14": "4U8cZp1M6wSWUw5TdgRCxxww2rvj65Q6YR77bbUSVCYuYFRcY2fp64PQkjVdbDrd2JYVAjpK7FEWaQL4Sf8RzN5E",
  "decoyKey15": "4cMsnBJxBgq4aGUcnFnemRtj8wpERe6JdzznqW9rrRwx2sak1ViRG6V1XiTPNB4PTVughBCqizFB232dgotZYDMS",
  "decoyKey16": "GK2fZpifepPowknuX84cgC4k62KQNKucpDpcYVgj3q11oVj1VhcnyK3JaSbs8NtpmHzvZmVriNs6a9ocNF7jyWq",
  "decoyKey17": "38hfTHvqYo413dZ7cPR5uJgWcpmd1J3XBN9bM6ofHqMMaGMDL9PEcStwxnjyRQvGDebJRWysMYfJkaK9uVhvvoq9",
  "decoyKey18": "4qNdshY5NxJCjw29Xs96fhxtprAc2jEczR3SoDedV6jHa3BCjvj52rGC3KiETDhbGuZfr1KC8DXYTJqhSRepocK2",
  "decoyKey19": "2UXT6v9C5Gzxk5n1Uwt8VkXqvsUenn6wfrv7ipyfe238eRrSuFumWpo1MjE4CMNoTn4PTgVajHxCzwwh4pqjKQa9",
  "decoyKey20": "B82mWC64fak6RJhnMScsm3AWdLiB6FuzLE7RT8MynhaAfJf3rxXav4MipckUfqmUMVuXmtWiJQCmgYbg75SwA57",
  "decoyKey21": "UgkxchMQcTnR1pDMYuA8hRPnhRUgCKGLkAmzoXvEENZJpsvWtXzf2jNLgHxvMkiGYmcTAsBp6ELLMoM4iboDkUT",
  "decoyKey22": "5S31cN2rUus2gKquevoaUJbharbZzJvR6Bzr5uo6i7ud1fugv6pFjS23NZDkpQmfBNn37ozZWTzNM2NEPGCsSDiW",
  "decoyKey23": "5mdo7aJ2qck78HbytBzGdeoHuzMsk8B4ScisB2t9AedqvLizgSGSyNqk86ERm1KW5onNN6s4tTuUmSrGuKdkHZQQ",
  "decoyKey24": "5fVSDhS4QJoUENHdkPeR23ELK9h48XPm1sVJeCTJ4Vew5i1umiaQHuf6iq6H7w4RzWFQPChVw8ph98nLV7kUamBe",
  "decoyKey25": "H5qX7h1fJM4fXqxyTMWbF67D5xPyUicMUpNaLaxKBKCTeEBHDaXTpbpgzxXAbCVEHrHgaaR1Pk9EGSRSCaYGADY",
  "decoyKey26": "5pkxAjmusU1YUg9CgSh5oKixdfvd5tXCXQansR7i6TCGpZqM55Vg4ggi8shpbeKf7kibE5dXqdoRLeyHWmSqysgo",
  "decoyKey27": "2PMzSu9rxy9JQUUqmX1Pbdtdzgf1VwxLip3DV1UBJUGwMJSVtg3LcgrEuQpAAuBzF3Vx5w5xpH9Q5c39mtoRvaR6",
  "decoyKey28": "3bFutwJHNTfiRNdw6kfijeCaU2ZK5j9PKjZKJAmXfrH9QyyRth1yVbwPGF8dvNTLinDiE6KWaABZYqnHZ1sijDwg",
  "decoyKey29": "4LFrhpmNZx2RXhywMC3L1UJHgGnySLyS9KS9Q6dw2R5Enhc2RNNX5PoV3sKnNjuL7W4hQqbXj7ypQ6iatc79VZ83",
  "decoyKey30": "3FxM1xKgFG1H8eZ4GP42UbeVQmpnLENyik4vcvCDnzDsbbSFXBw2FW7BqRU1PBudmub4kfAiaodHkZ6GY1H5kEkm",
  "decoyKey31": "4FD2iFpMA4934nnCw1N5dGPDCbEc2ZgVqmkCc4uCvqBjtfStoom1j5Yh3yrgQb54wLaaxtGGVDXbku4t3sSxkKsU",
  "decoyKey32": "J5uqxtGGWb2CSCF1xQWmdQdBUqnW3UzFR8KXuWRPSczWxanF89GpCrRVDphe4x1fUEL2DrjHVg1zmruG88waTgM",
  "decoyKey33": "TYYq7Le71bkCQQD4qunEPLZExgSxWPHjEVBVFK2BB66jQ15YkGTu9LKtAy9gp2iw7BQL8Hrk77BRrT6mMSh7Kyf",
  "decoyKey34": "3JsauQ3ZLMdX7fQNUuhmEaLyUwmyKywfk2ZyxZdXtLfnh2QfQcuPGygYrW3kUg2yRv81jhGRTxbSK4ERJj7kaNHD",
  "decoyKey35": "326ZL8KHgYzKF1DP1GqZB5stHDBzZ5oF8RHipcpmNqUQrdoGKcNmPY5CLCyEhGvMD1gwiStgULeufBd8rpvTpP7n",
  "decoyKey36": "33voZiJkmUn3Lfv1zLjWNH8DauzAs6SMJvJ3yUFDYJKiDG38vRcfjkYCbtjjm8yu56fxFnc5mfqiJG8xG4KoA1h2",
  "decoyKey37": "yEK7BuT8UgPEU3y3QqAhMXnor5jTwv3Ye1zgC68NN13gwZj3VZBnSYsMsTBLbCSkYzLLu8214Yh4uVVh49a5FHG",
  "decoyKey38": "Un5P2pv63muEdSMRgoHWLJmUwRTgnupHR9cG48WZR9CLjNQyB8hgV9c9B5AXfv2LYTFRJQbZ2j9o6o2QaLWDbB5",
  "decoyKey39": "4XCS4FdpF1nm8hrv3K1KXRdXF6yakh2FQCcv6XtSts4xHLy8qcBExssi9ycMAh1izM63HdDW4qcMjVf5cxG4Wvhp",
  "decoyKey40": "3Rpz3UALAj4n67Jt6T2UzTHNQvyQnoK4exEQTeW778jorRQdE9kUih3nwKGpVXufUSY9kfZBuCmCHQFqnRHbNWWj",
  "decoyKey41": "5H2ppzpQa4wc2rtgLw8VvrVo3oXQu2N5SrXr7e7S5yEr7BL7C4Ztqy4adtWVYogFEdo5bnd6UbjhtHaams74j2SL",
  "decoyKey42": "4xUL2owRq6n4eB7Ue46RmK3iG1u6LZpxXFusN73BJLBeCL8YGuT7p1H5H9kqoHMtqqPkxyq1C7c4wdBwgKcokFNQ",
  "decoyKey43": "42rhob9R97dVj3XG19cfHMPRTgiRiKX6VxaTTFzZrTkppe6KpcJebL3XaKJ2Qt19smgUeyeL2GheRFEAg2rmLmt7",
  "decoyKey44": "5WQowzfSSKZqeLLYxENAXEuJxjFiSN1WdXKWLr8Mwv5qwhbMUGugvyd1mruHruUC6tiAkQQ6JqN1jHNE7wHgCgGA",
  "decoyKey45": "2MmX9anzywE296tWfX8qg7nPUV4JFMkekZvu6TduCVUPr7r4kH7vCRq4rQkP4RjVyFgw6JqLgV2LckXV8eWF3Y4C",
  "decoyKey46": "2LeeMAzsfC7Y3t3VWSNmtxuqwmkBe3RpggvPqHDMKSDihZwfYktXHm3h4GbvM41SbXHWwm4ooXXyTumJzpSXwS58",
  "decoyKey47": "3jmtmmJXvo1Qh7yZo5NZxtoZQDN9D68Yuv3XH2WaXV1aUBgv2oi7ovruhY77FviiZHQ8iqsjvLKVPXjnf71dEn4p",
  "decoyKey48": "3UzD5qknHL2baqEV8LBhyUVJMP1Gb3EyyveJaDWeDyAhWoqMx3YqSsEQzWcDN1U5KaZXbB3gbfvWEpfsuYe9nqga",
  "decoyKey49": "NWLANkqsQ7tRs2dwyigsc3uHoUTXRK4Aqdw4Hh5NwuUAcSoLVJpZ8RGZaZ8T6bCMuTwrjcey5qQdH6kmnLYTuwA"
};
// DECOY_KEYS_END
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