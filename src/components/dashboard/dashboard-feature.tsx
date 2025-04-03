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
    "4AAAcVH3Vf25QDqdhXMnrEn82ggpGmKA1hqwBQghtkGM41C1N8FKNGxbvSEw7pVk8RfDjeBq2pt7G59KH1VwcPMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dH5HsuYo9WdYD27XAo98e7imV6jnEVg6nzJVvQTNywA112QHcSiS1X4B1kwsSmEgcZayULEPZmJar9AbUs9YVhS",
  "key1": "4nrQEY6EQEtMV6f2KXzfCDM28FZNduq3JnNPhxowVVkS8m3HfhWnjuHyfiS7YcWbEFmKWeCV4KGrxTHLPpoVc9uJ",
  "key2": "5cjkADaAAVBtTPWhjpdckv1Q67fNudUDyHTfiANVatzMazfZUTqAToxSkZfmrxjq6eEYZJcp6PbXrg7zxQagvh7j",
  "key3": "2pc6BjKYJyMGa41WyYEHwH85CjRk2VsYgeB86krg4niLhwjrtnFF4kHUGp6T76hULgKWznoWXqwR3WVuqkzFLQkN",
  "key4": "VRDKUfEBLrV81B8oNYNDKrxoHMLPTXi4M7QsVRqG4ANGr77rang7HM5DZpNcocMrnf6w43XSzuresX94JgPQn4Y",
  "key5": "4ZpitMcuQ6QM8j5z41HV4U4UNLScKcCz7XF8V5CKF7nHpixVceUiLK2AubDWU7fm6vYnjgPyP33fv235sA9n6NpD",
  "key6": "5vtsVKk5ZoTabNbs9rvo2kTpDmMdTxsmf4U6c9iGeWYbFZcZJ7Ds4wzBNm4wnVcxwQ54WJ8qgtKGh3eDJDrVckdK",
  "key7": "GgN5sfd6QbZQJbcV6JXcLiYTKXd2579xWJCGhkbB6U91pPyf1BhtNvvUjiz8jYCfs9tfbRmbWsz3dVXkBJv1jGS",
  "key8": "3qdzKxuEuCD1GhLYgamTgrvL2v7eEUSSWyoBoKJtEoAABDpoG4mPgfDCeR2eDAJKtx9xXuWxpdJZovoP5Z5A8Wo7",
  "key9": "2xyUquFsR55Fi17qcVwofQFdozbWuWctFTjA4wSRqX42UsHYKXLvFPcNdxBqYGVFnrzZxr3aYu8pqm5m8KbXbATq",
  "key10": "GvDgLBkddZiHwtAMPJbMy5y9N8dwdbvzKDZ5TJd23d6b7KXqZxApWjjYe6Dv3TezQRiZhx4FRqmdBA7BzQU6fcw",
  "key11": "2Fg84HHmTYVMPLwbUgoXkmob249PdQjKkR2maqHzxr3AQsqfTnmKdUbwoWZ4ELKQ8WXibRU8HZiXaAAcM6etMNm6",
  "key12": "jB6RRBN1j6tcjkkEiuBU3PaCspUJY9YHiwUNxSEzGuzCarvnagGJ45zQeX2hoZkuDwpumyKrbijRGL6ivoBmjvt",
  "key13": "5eHkizNQF4vBFcHY5QJ3vLLwEbBpdnH6tTZj75Y5gRx95bmogY9QLpRaxJAtnq1wbUnqf5K3EwfjgJn9Nu6ix2iC",
  "key14": "5pjcPtoN8PTMW7TBp4FcFquZ9RyMFUSTTyrsTBkSND93GExxvCUybuALWtUmrnVbFNAQSM1NXrENyuCxN255pnps",
  "key15": "57bv634sUqS9JPppsE68FeU1odzRaWPAqnCabVQ6tNG5fjzhocRqLDrzKnoeh23mZG5AMkNeZ4kkCA3xrw1EsyNi",
  "key16": "17aMCFon9KgtGWqnvkiHTx5DTEgc7QwhBjNX2N7Stp6EPm32zCByN9xY45QNnXeajjUAYWzh45Grzrs9dDbyQ6S",
  "key17": "4u1LJBTR7DFAkTUhRrT9YRnP7Q3yo81uwvo6RhkqZcx6zMpGRsyNxKqeLNBRvwewkpRQYHZoZFRoZzyequgDWobr",
  "key18": "5XuEYif399sHG9nYPfkb9CGddY13M1dYdvruxxwtgdvjXSMxJwXhwTCWmTEsSUWfe85uCeuJ4TckAjtPRJ9b8SZR",
  "key19": "56iZVY6XrQFzUrkz1v1W5ZJu3pwSJC8nGXj32a5KVrRLnVQwP9BJQZWictX8fx6Ru48qQSyjMDfCKffNqDXG2U3L",
  "key20": "3p4NcmKqu7Sk9khZyEy2RTcEyW9BCary7xf6Gf29RxGxN8LKqjkRzF6Sr3qz3CNp9cmKFSjVDxMYsm8DzF7oR4s2",
  "key21": "CkuVfFm2ECs17HJFYPesjrttB5GsWw93LvKLAR5V623f353A9DBbFhfvVbig1sCWdkCTkAYb7BXhR8Vm7tGxSgX",
  "key22": "2g86WW8t4rXSJv84Sd4cDHaCLoXiREw7ttZ3X6LRPXAcsKGRh7qgPspRYUrti3aGRWY7vjGa1r9AGYtFAqnFexTo",
  "key23": "3MMxSjkNSrGoCcwV1ihe9oFjxaW8YM5YSNq1YqyBAvG36m4ikJARsQKJVrRE3ua7HtBeaGmjHm7Rt7wzX11WPhXx",
  "key24": "29ChSrSmTbc4xd3sXCCtyAT3oK9tyaCMGN3a9CFoCgeNgHCWDCi8PziPEfYSryWyoV5pNbqyQ6TV9j2ST6J257Xg",
  "key25": "YQvz9KFW66GdaLcx7QvamFahfGX1Y3VDzH1YjUbwZSjNHCzipAN6JS2Eb7LxK1aJnqNTvtk34mShWVW3MrYJcTy",
  "key26": "3N4KvF66EbZMJy9mdQMooQrXo9L5QHkLofdHhYXQQWtNRoRLaVbkK6AuiXYoiZyr72PRXB6hTYbtMXSDerj4zHkF",
  "key27": "4V7cG4T7dDb1GwHsPURjyKVieCiieQZdH3tYDXXfQxoyFpGw85v8iuue2ztuLmLMArWQgdkaWKrjvFhUCcQLpr1W",
  "key28": "3WMSnE4VxeSofWnbHxDBrhozCmvCf3Sdv7M9zVywuvospLDAWH7i5aYbSfv7BDpSitWLmJcyuiyCxVwKRN7iMJdU"
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
