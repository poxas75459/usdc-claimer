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
    "ZMJCYoP1gqfjMLPxLv93WrjWxd6aC7HvVwcUjrADrsYi7p28zTX7n51mBYVoL1GotH6L7iDNan6DiLjn3jE5rHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "581Nf7MhVuR2cpfuo5BtVM5msBArUrmGEJhrMBfpbnx2hz67D3cwHjmUv4hBsX8YdsCuXofhkQnF9pCvUs8jziGm",
  "key1": "5KWhvgUhh9aTrrtfvcagRmmpCnw5YmeweVxeA5zGBCeiHGdjHCwQM6r44M92BSYFw7r8268nJGaaHJDsg5GinfTr",
  "key2": "3Y4PBvTiZB6w19dVj6qvFsuYKFHW61THpyK3TYDW5u3WrTL6avydqi4ySvGhCUxNSfBE2ZdByFR5w2aNinuf22GW",
  "key3": "3EkBDvDf19zNXguihKfpoHFLSWStWs5qGtQJudKMkoNkteKC2yLGNpU211q2BCGYCEj66iLpEYiprmnLKJebr5rf",
  "key4": "4Zx57f6iG9E7z9TjXmGhNsHUyBEs367TUXrSu1YduwZibrdrysKxGj4vJgboctk8EGTbQjhd6svnZjKFt1Chh4Jh",
  "key5": "2EucrdTXbCwhvW45NBFZFp8q2rKDiZuPaq9dfSLjN7q27h15v71SVVxW2Gm8kCHMB1MX7PjFBWFrNtfFot7rAdxy",
  "key6": "RpCB1FP8jjncDUzhPVTVWr1qwzEvK3EGBK2z4BY9WBquChLZxnmyou3CUMhRirprfhGbUxNvXFS7B6714SrA9Pz",
  "key7": "3Ht3L8j6WDse4fNQZyCxeXi9Gk8Wv8CZgmwZUg7pEYay41G7ibuvjAi2BGUE8bb1aenuK5iT6yvkP3YhK4gdsmuP",
  "key8": "4zHfsd3fDxRNCXCbwZLx8akyg2jLJM7CXfnLrTmzt9sqG9gD1N5gmhYgKotjbAYhUkXD13yrqSZsRQLYeWn7bpvK",
  "key9": "5Dk7kbjbsBkz2UeG19fknTJQc2prwwZZNKzthzeATCteaMDXStWoDRhFLrXHGrfuEUyXrpw4hzaHF6YTLPM311gM",
  "key10": "3QCbejwFp28DPnkB9o5AGsWJ8tGW9S571A3Ly9wQcGrQUpTb22nBsdvTMW9KCP6UXrw5wTn7g4ByC5bvVGkD6Sed",
  "key11": "4TvRaqRsoHghzxP66XFqCXCfhxVv4rj1mNfSdKceMB9yFYC5gsKyiXSaGvCeRvmVvMn9zgr6Q5mkH5HhVU56XnnN",
  "key12": "3PwgGZ7V7vMFhtjUGxEmAg3YSUhRiZWKeQ6iuPJAFKAX14CJg3Bpu67ooVyhY5VmbxWtxjGQP8hhen3XsCcGoR4p",
  "key13": "31ARSU9z3oFv75sWGU4oqQam24NjTmQGGPsiZeBBZJp9w6HhSJYCScfq84kNE1CJG9ZiAw3LDgDoqckBXYvR94q3",
  "key14": "q8jFzC86v3mgkUixo5wB6DxdqTgwFsv4jjmoAxuUPi8ve9CVxbrYPGVuKKQLswCWb186fZXjS78VvMmbTBBbZB9",
  "key15": "5n1fSWuaeqAZvyXzcCoahiqtA4AbpjSaYX63NKt4hkn2Ye9f6K8kUd2ptEpQjxrAiF8vXohT9xM9GcWo59GU4b5M",
  "key16": "5oFXwJxfqjQ829mGHthPafkQoxTwnxKjHnGLJTfGbqjohMihAK5RtcFTL7we2mPyTdBtsaKt4natuoRXC67i9Ehw",
  "key17": "3jFHjf9mvMe9vVjsY1jHSwhN9X5xU4Q7W8RtyvYnDxAx6Eb851aAoKPA9P2uthBH19yMAjzHPcjtpvveMqpAuzLM",
  "key18": "4pRfG4rg7Ji2ERoWupo9LfWdWPbKB7BDeMs6yLss3gsF42J3q2izcQheSST2gSGir3ic86cMu7ZLSdaSbruMMhqL",
  "key19": "3q7u7ASzePRGPvYvTiF5qPTXwpsz1fKUgXDTLyXk94ZdzUgS5quAcgcE2suiqo7ohMsPGcb5JqDzUU2FMm4fDzxC",
  "key20": "3zQL3o2c3UnDZCfVGWDFz6F4DczC9hu3kv7MdmgBQXg9oggCPQbKdAf1aMdAN4cDGm6cqTStVKEmRJFdvVywW8im",
  "key21": "XC8BBP8MQvUfk1uUpw7oEc2t2u4aTX3WwZ4pzQgGanu5xE1rKFkagPjgMLs6biJAbq99LvNt21jXoqDXJLFQw1v",
  "key22": "42bXv2hEyh8Tpy7KEztUS87NiuMQuQPPvc7zaK3niQcnHPEqYKWFk8e5chhpSKssAfiW5jaiFToPjCM5V3Mn2Nef",
  "key23": "62vn4xLpeH4s63BXe3TTp2ff2NbDe9BvAfjPD2EMygTXMGo7mB6swbB6R7F7BxZbb5ndjPuVfuncXiHFiaH4Cfwn",
  "key24": "51bUcPy9nWUcqCdg3vDxm6q41YFw6qtU4poEspNioBvAX32p4EBHSf4PvovF9Gpg7y8yFVc1h9HohYYTpmCa3pek",
  "key25": "5VvbCud3r7jqD3oEczafhrSNUsZ69HtVD6cWoWYCPMdFecgyUwAUWb9mcBpaiQ6UZffsRbGtkPWtiPBeFoQg4HQC",
  "key26": "QXLedxmekct3dfxiHE1trunSzsw9gCBjEns2iYKpKUqcWsf3UUsTwBETBmJReArRFoLmiVNrmjFbwwfmmyp9GKf",
  "key27": "2U8YhcXVm7e9LAvha2hqAYfA8kXv6fzK8jYzkawPjpkNfsqTUSooeJSEanGgxPNr88vv2JyQjj4hMnUXeLR2FYPq",
  "key28": "3ZGZUnmLzqjyCRdn7XCHtLkdpT6p18Y4AiEw3wRZe3ZVmLbkmGGxaXtvP5jWfmHXS9cL3Mj9Xkan8F1oBaFaBygE",
  "key29": "2iVE57NKQtneMzEdz2m9kVPntbjxdkRRoyEZzD9rXnXinvWAbuWF2tzLniV6AdGrEtyuqgdonvYBAiW94KJ2E7EU",
  "key30": "4AJYjiF9zddxhUjEXpznZdbxFhFenQWbaTRRkVpTmDpYdCz8GaXsuSxfaGNJSBVufFbc24jR6aHsHHJ8Ec9zE4jT",
  "key31": "5h65uPpWgWBVuTPPTvdhzpFcBBhuiAp3QWeHxbMdrb6v5jLWYDWuRWodp4PCPBR8pbkKoEjqCnk5tdh592xPsjtc",
  "key32": "4UERcVQk9WEsJpk744J9zVcUnpgphoqLFJegvmkBF97aMqnrikBt4Q9cjjzz4Fo8VMnF7f7s486nCLDQqLqDCn1d"
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
