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
    "4yfEYn3WA1ajkvs78uEf5v5uzEHSJBcY7bxkQ6mfipTcrAYLPTDauYgFY3bWQ38YYk8qNPzeN6EzdH1a3JdFiNXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tw9RfNsh8D6WZGZNhabGTotutWmDpogxhTdUscJzLb5CBaWGSHJkXCyFiYo3VVjDAZNYojEbgq8hedzcxGUX1Jd",
  "key1": "4Wirw9m2h8V2EfsAeQ1dVrGwqNxWwoRWhHwyAmd3Cisc6xqPFeu6BnXHw4uJzYE2MkpiQzwzhhsbmfEtzTrbGbUY",
  "key2": "5EUvftKrR1Q2ApzZFeAcsdFqYLHAZmu7NEZnUr6sTig8AevMCsSzBw5vEbPhXSpnEqkuqQWZeiGmJ6H7FWbRAgdP",
  "key3": "RDEYqjgTE1BGtYQf4oKq8mD1pbwm2zmvTN4NVEj7RHBrm9pzWL9VT5gnuBphMZbx6pRTBZgvMwrLUsmFQUvFbxo",
  "key4": "5JK4zqkYySHDb4qotqgbU6e5M6K48QrdeXAmBDuYk1ZPUHeu2RNG2B1BXZffqdSSCq8tiyXkZLCYXC8RLM7XpbnR",
  "key5": "3dY4KVqCQMi6taLQf6FbqyWcdfTnhw91AqbqiowhSpeeBowaSehqbiJMrzRzLxCdcgKCZ8YK9JxV91V52KJmtALz",
  "key6": "37yGgxtH4Cits3Vjkq35wSgGGUsqVNb8UaqFPSwnSKERbw6QephwQ8EKZ6HFoNEAMPFkG2bz54rEWwrp7TrdrTic",
  "key7": "4eUqbKCtZJb1D5ePL6F42oLQuNNzcMScHqEobBVA4373A6QxcQrqYhP9p7W4GuvfXCKfRDKZx95as2vvqNV72xzm",
  "key8": "CKz27FpoXunh7VjGLgAPSdEWsNjNwYbdZd4W3k93qJjJkUyunP1xeNmhYAYSeHjNzcW7REhz7qui5VwnpUoHwqF",
  "key9": "2GopPKC2rGC1zgVSdL9FaqsB5RDGAYdta4b6JKHCgJaMYHWvGcZHgut7pWqDfFnANK8pd6YUfz7rJfVFA14p4RY3",
  "key10": "5JxBWXWpryD3Z26622YyWJx7Jza7vDrMphq7hdKfvsQVbQFhdUzndjFkrvQEYX3dLPC8TgzhYF7F64AXDuA3fF2v",
  "key11": "4mW12Q6D5Sxjqqm7XPFpijr77W1wdJDuENTjGmPwAeS4eKvvgWw7shVZFBRM95nDW7b54FAR2VwBLFxAab1qZthN",
  "key12": "XdZCHXP3pQVDAbqVAyuE97yEqaZYNVL5FrgiDy2UCqwR5XMGF46Tw8jL8EexJCqJK2G26ETN3iaNPRn2e4WD3pH",
  "key13": "VyY5k28C46SGVv2unM42VnXqK5DGZWwxa28D7WQgWJKBawsft4YD17fT1L3Ug4yGDm4F9DgehHVVkD3EAF7yih6",
  "key14": "3SUQ2VhZ7uAzneCZt9EcSNHhJKLLpJqbquyjQ8QSnB5tZgZ7MB5eyPz4hZFpJPjVuWywyWKrwSaXyznfsbwFMhGv",
  "key15": "3WbxtN97WSz1RLjcBqTs7C8KbQ7YQ7GtGwVAJZeNdo1iVBtNfMo185hHv4BZZSVgHTseY8or8NbMJCNH2M2NZxJ5",
  "key16": "5ahYkkREQYFkMtvYFNthgq1nkpCzWyqFzCTFjigQBGqGQY9LuPdp5iTt3rvTraBfGRgEwhQ43ydY4v2bk7a8jA7U",
  "key17": "Sw6V16DmJPvRhnXMmmfRu9KgxT18WkomTy7wdpra6kbqFryiPCMXZYRa6XH9Wd8xWJK6t7gGgLcYyAKa9iU6zeL",
  "key18": "4fDDLu5snvALDYpNK1rZkZiGWH3Z1zNMMVq8zdiQT3as5ViRPcT9sP4XJreSF55sEZKDQQy2JmY89S3wFP5fUbCY",
  "key19": "zTgosoA628uJaynEDqbkQPeBHCcPuTEmC9vfSFveaTCTsmbWg1wduUsMY3fq6cdyi7VAeHzBu1fb2u1tbGyE4Y2",
  "key20": "SzvSTpyUPXi4pCGwSxeRA378vzHGwBZBuFg8M8JEVvhSLGizm1fcUU7p2BYWusikNexCKn25CJHbexdjuuHDqGk",
  "key21": "2gG6p3jN9UPQ61FE5iT1oAYMHmM592sfhoUUFCNP1vdQkMdzCgoPX9hAHerMiko4UYCEdRueKNqyZYkeDZcy8rJ1",
  "key22": "45MEKbu1hKNa8JENp1PceFwAz47RPprGXnpEhkFN7BbYA4hV7uZnEhwqQ18LbGiAbW1rK3DY5pDpYmTN6bDQmN2S",
  "key23": "3xvPuUFHnm6pseBGQdYgGmLZ42FUXLnKhSLA5F9SD2dSdq4Rfpc48kee54qN8oRfpZR7GLS6x9LWDQyHKXT37Ko",
  "key24": "5phfavsmnH6NyWzDokhqhcnvBAmb3HrtVq8MGxU7j8YnAW68GjpahLcUtdoD9hGj4NjmjbcXUNFQQwZMx7veneeu",
  "key25": "tHc9u4MjWuFj3SJc6USnaLXgVqf81jUVmgKYr5ycUXhDiuwzWfFgHugDY6w6iUdKvW1NWxSX5vWxwWfNhdUoNCJ",
  "key26": "2SA2G7YCLWtspfVXVHDzLbE1AvDPrnK2tbYEHAQ9VAMSAATiMBPrR97YyinisU45GMNrx2cA7GaaaLqRNixCNVNy",
  "key27": "4eRHieKkpDGGWk8j4BeXUZPYtLaS5RyQumiCLhSSVz5cbtgqVSp9HGVkY9w7RDDznLwSpQgtXiEDSgi7P438toUP",
  "key28": "4NcCJLgWwGEJgqk9KkPkiRr1F7KU13m783pqjVLyNPpDyhBkTZNJ6vJwHgTMZ98LCjw4kR3BQEqrJPYbD4dLYzSD",
  "key29": "3jnMaiWxrxjLotHtPrNafGZN7cshmanTUKiqgMGPRfVg3UYrmjoFDskg5XAcuFyVSZmMvkiG2mgFDeKazzGanRjk",
  "key30": "3ntufRNytfeJXUNskibiSME1vzcAtMLA7RYJmLACRJTwyBhFciUeDMQSmDmX1bahHD3cB2Wt8eUsaCvuSA1J4oGb",
  "key31": "56vji8kG1mwPzSr2UDHFt1ayTsuib5dWAWzCR8r9JGzs1VcKvVP36x7zeju2hxiLzqra44Q7Gvcr3ozcNYMC2oLe",
  "key32": "45rL3US2ewnuc53ajr6vbTPbRtusuvA3MkPR5S35UZbbY1myT5H3V4ZgDqkXCoPDuptd8cSM7mFwsdTfem2B1b5c"
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
