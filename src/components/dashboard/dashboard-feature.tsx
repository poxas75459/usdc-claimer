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
    "5FhHX7WJY6V1wLTebWVw2CBc6BXT92nENpZvoFkEXrs8wAZFyvrRPorkj88zJkn1Y1ZRiXiccwiHWpXW9HKS3Nz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNbZH7NXUJyKDDWjQdFJxA8xJXPPcfzX8VQ27ZUJXL3FZjmEUZGuHGnw4ggi6n2bgTkRh4KauMCMnpQN8gBD69w",
  "key1": "2mhFeYD6XU3aizuTBUGy2bqBBebKit8jTD7FxJt2EfKreU84F1ZQ7GdXqTs2RC3mb2t4z7GzbeQYPmMQqrAfh6gj",
  "key2": "2XxW8UzZDhMCAXMhqGkSJYx64ixubjEAaXGDbvRNsTpd2WS2EZkqforqgGn4zSgYNQTyEa5hwrbi2VLBCbhKTPfJ",
  "key3": "w1jjrQ53Jaawmcg6hJjffXVwugGCKpuSrSZ34rz88hwgfFD9kGTEkH3Ko2DmMzhtX7HfXT7KH675L5NZX5oADiZ",
  "key4": "4Ptqig3eWDAM1gY8xo6w4MijXiqMGWhYbJHAApYEoFQtzft3FqcSMgLnXSpzZGqCSVc2ZBL2MudcBz2jQDe4YCW",
  "key5": "5u2RE7benLwVNZxtgHrEVQEnAkjfUNMkmHjuoAdcUJzuYxFwsdHc5BYRvzPGWexaM4mCViWs1YowK3YAR7ou8V3L",
  "key6": "2TexBvF1b9VkxHHGdfwdQJeaBZ4zrWRRrd6P9m1d5DfpqqrUhKPfjobKS1fo6C7BUUsVPya8MdCs99ZducabHZQZ",
  "key7": "4uuMxif6zfCVxAhDEWXGabWWceSvg2PbCBAQcbcS66QeUvuTsYk8ayfHnuAEhPwzKofJnT3tXjppStEqEiw6uexx",
  "key8": "oNKiE3LZZAWLoyNhM2B5HpAbmxXsxBvQgipKQNgpBG3ctj8YeHXuZ5JZtHjMnq5czEdxqmdP1bkquCZpWZe3Vm9",
  "key9": "zU2A1ZWCoWsqj5S6thpjn4CXocXykmxpGrfGc2sTh5M7nqFNDqxVAGzQ1Dw2um4F9HEFxHj8KhjM1rQx7o9dyxb",
  "key10": "2cpAC31aAhudrDEXUHHvwbYFr7tSjLVHNUaRVwCTkmgULNzLJVCPddiZdcjBVSpRrk7gLRx9rbLzuL9zAkpx1LUe",
  "key11": "4TXq7LDwMzdDm6uk8dr1hngQAiEhtYRocAHH5FThZuhPSVy7KRx9fHuusMGBhVKiLeWTF7upDpAwpsdjGwuYaheQ",
  "key12": "5cCjgoyPRcDNaJsvQGSseDYQoyShAyhF1a9TC5HVLTn9cvvQmyurbe9iEfr9qxYNrBitTj3DX7thzE87BufRwXr5",
  "key13": "2uFcCKJjgt43qEVmkR84xevkeEqgrry56nuKUKTXXiwTEBfgQYY4R7bT9ogWfvZ2Q2h7tEzv53yYH4uHtsuWN4MJ",
  "key14": "SxnAr2jJr2JnFDX3UevkP7fHnBSGbnbXTUGnStrvirfzCyHQCiQC4pyKHvzY7YHp1jM8GHPAYkjxH7qDivTpxLt",
  "key15": "2wfgSkZcGkTVwwY46MQbmE5HfzFvoPaSkTNFARacx9t2db5ucmM595BtTbNyMiMpp2i1sngJUxZsq7CKsHFpwgzy",
  "key16": "5ZBbPNDC8ktnvv37MZYoEvHsp2jiTQqxujstesHuL3ou2QkK2Z9qvT7fdGBvZZ1mA35j4yq2xcWdYSj1xPWqyU4Q",
  "key17": "31fkN8QBGNr85Lz6DsknstLqkfUmBkhTTjaqPf1QPRG1sFnm8E2gXV1B7xwyUHAGDMjeG3baS5FxVvdByPWuM4Bt",
  "key18": "27TuD6b74sSMR2WrTo6hGwf5wUDt88jvK7AvUnJbsNp1tkyKaw2NkSJuVPzk9yS6DHnAwuFFuhGcbDtZuRCpnoBB",
  "key19": "3hTnimtxNzcKgdxpMzRwL4UAJPcMe8SnaUnYjbK9D4ASinBtJPwnNc6CUKvAPVuBnHDSk72iRQiYg7wDs5TtqwYJ",
  "key20": "4EwaeZMi4eyHbfnzStrDoPBzHxi7PUGWUxGdXXhAQLpFECvsxkX1yoFzibmk7CeJnBKjNobKcs8oq2AbT9RUvpWT",
  "key21": "BLCyT58cAxh6PofMmLhydkb7ThKV97A9aQmTVfFryMq95kfYc1mBdUXKDa3NjmnVhNAE3dnALGWYrUHLDUSjG4q",
  "key22": "2cwdwJmibcyNHBw8Cu3F2ZBSsxPk1heubMtmGF1C5ym9nncrDrRTaPXZaxt9e88ezBEMxbjmyGugA3FzCHX5oNzP",
  "key23": "4nuzuohN1BUhEaXFe6VCysr9gZ9j8soxmYcnLZTSxqu1dmTaGh1WnoV1xHesz2me5dacQDz9tJTZ4YsU9iCSMXZa",
  "key24": "35NsEYQoGwKtS3nyTd72UBaPVrWSdhqbkb9JVuyF7oSN6cvAkRqBz2UYWVSNTv6Vwyund9S1fuiqNvtn3d7fSXLH",
  "key25": "3Q4bPyuDXHA3y9fdwsjsNe7xCJCJTPTK4gCtbShF5XqkFFJd8Nn2WGtgawDuqE61tLnnpsUeoaifB17mqNMNvXD",
  "key26": "5aXSSBu54M1gymNTniuthHH6ATqAxLhtM3RjxGcAkv4KoDYmVPf22ZLxSMGjSTg3J8NVpw6jVffgRHHRcH5iV2E4",
  "key27": "39xrhcg1AoyP4wxveuYY6bukFahce4WHPma6HyL52iNTaVyx7TTfx6WsQ7EEMPBcdm4DyMVM5XFuf6M13oYygJrH",
  "key28": "2qTyarCy5yCBWPnShTPxgptacMBYWYLZiHDE47PjR6XfCCMrE7cN214NT7SCLy9pqpoRURrbNKQF2in9Q3djDYXT",
  "key29": "3wxGwcZoYsTGamKdEZEC1ZADYCEHW9HKzubTCszh1qbXduXPopTpVbh7ZBPqK9DEXkKcD5KpffigYsrsq9x4xqes",
  "key30": "3apWFmXfpMTcP3DnZbpoT2w43L338Frd4u6Aa3QeFh6n1n6qhpfRDgUEGAE8iRmQXcK38NJxunUuVTr1ExZLaBFh",
  "key31": "f9LHAeXK9vCTA8tNbfjhFeoDRCjLtrh6Mc3HyZN5FiovHwYGnc9Hk6LNJtH7VqPDU4QM6SuwKKZuS5Sz8CePviZ",
  "key32": "mDgh3TF2q6ZrNDprfAZz9fyoxTuW3MG6WLVLHLu2YSmY5gtzBsbNq8zvYjigeuqRYRVHerc8HYfiXA6pvqcdmcV",
  "key33": "3NxJw4rDKckFe3GwvGPCPbPUSorFpzJbjQoevQY3FKjDfteKAn5rX9k8kAufWFHxfwoPzNESdarrgLtaJ9m48BeA",
  "key34": "2W9ZYoLFrmq27gUDZLLiqpgL79PRGHLkNrmBpXX7C4Y4huEb1cCTLa973kAkDtrvc4ubPC58WWTnDieUpW5UzPSE",
  "key35": "3Q4F4Uz8X5DTzj37XT4chWWeTU7wZn8siSvs6tskHAMt5hBgByCiCnktNTUZWGsZNn5CgMCtLDowdT6w7w8BVxcN",
  "key36": "3tkmhLQ2CF6EhZLFzZZWHh2sAB5Y69TP32o6hpc2hY2tjwHmexKgeYjqunjZHFTHM5ouuFQN6B4W34J1zvmUkYeF"
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
