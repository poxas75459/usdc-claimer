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
    "3BnuE3X3HKFnEX2nLQoAhBkddB8ViPaCU5aHBiXuEujzsz2dciVnjCDnSMxrjBAUfWckGYVGs3Jh6oD952FBfJMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51bSaJLtF9Q2Tv2PSZ2sR2Jkk1kCnKb8KhSMzWemXBkMHi6ew5fymb9uwXtdBiL56PEWxrK6qdJk6W3613GKfvu3",
  "key1": "2ayHGYTBBuihsKC4fjeHwPyT3ntYbtCuWEjyqSxvkDkuJgJ9mbvDwt3EqFgKbNDxEqDQAMHKCRRvbXg6WR2ntHpQ",
  "key2": "3EdaT3vpijcueMtaqsLrfW8mFd89J7K7xzoVLe3TpZxD4Tcx94tFrE1u1eKxmZvEGDdvEmAXkyyMGEivPUAwKFJj",
  "key3": "21XQ7oHBCryPiAnPHjzNVopMc4hVDs5CwrVLdboQqwFNbZjf1a5v247otGfgaAcwGcwcLUAKAMu5do5ABdMvhMTB",
  "key4": "4Sbw7GYrkavHPVjtYq2dLvpj1faKaCrqj5tzpnkbYG3J4WmeaPcXZRSRxCxGefJGsxD5RB4FzryDowgE3J4DhAfA",
  "key5": "3SV4cqP13LNkgwyFRX6Qo3WJjwLe3sv7K6wt8vTfcoiYkCYPm7bNpHBVnWh3fF7jTJpoKp73zhm4cUbPy1XamfVk",
  "key6": "3dqbptuwKu5PbtxeLBTkxSthJgmxoV5Wbk32M72eBL5pWKocJ8jL1kEkvs3vK1nGuhRwHv4YakGeRAcoi6nTMtg6",
  "key7": "4thHVYxyS3AfSMDvaK5HhbgpjHRAStpZ8KLJ7LLrHfPFWeaGf57s7UBZSyYii3DXJW7HjWnJqCyg9zawCVSnEYpm",
  "key8": "34EufQq4vYxqzn6TeHxdg1CF7KMro2NaLbjkK5gDBLgH57n8U7CK8irRLfQhKtsF6F3NSmxe1NdWRWa6ZqS9JUt4",
  "key9": "5i4jqWHMZG2dMcdP5KTijQjp1PjrvXnyt5yacq2ejZwvbByEUddCK1PoDEw4rZeVsuPykCFhtUtDMRhzCEVVWn1F",
  "key10": "aq6uJyY7Kchq6R2U2gGWGeEs8ioaxGXwpNuo5V3bB5C1xwimknjJVPh674cD4P1XLoFQzchezYqgr6pLVneoQvA",
  "key11": "5spcyFb9EASGgNPFcKJQ2LKJEoEqQia52zhnBMsbFyubsxmxjZ57JozLFCt9jXbZZnkKkQs8poPveEnAAASWXcpH",
  "key12": "3HYovxSuzy1cU8Yc97z8d5xY2ssiDwXNCgSCyceqWueqHFRpRSPFHnvTxfix2x88FdBXsiez37HGD1j3QL6iAxwZ",
  "key13": "2mD1SMHhg9CsTP238tKWEmiqnrYFEY52HPjmjrgm263Uasm18A7A1xtyLN3djWcH2NB5xfJzptDbL9gCQLq8r5m7",
  "key14": "2B99aWHRdkKu27pMzzYytDcpPKmeBK7rruya9Q5xp36TwM3PLutFUSEinVTcaJqELS177XPwtRRmHe9HXbsbdkeB",
  "key15": "36JnLZxcU2pywoyBjWea7Xw49c1wnhY9MwA4kwx4rpUdqsLY9qP6vfukHCeXRAtVTtXf7fiWs1EyWrAj2tvJV5uP",
  "key16": "36DnVLpb1DRKmq23Wrv8vmJBtm11Cy3bQkC4tgxBpoToxGqQNzknaeDisdwJCy2G81uxx8g3iEzExQThT2Zs47Wz",
  "key17": "2uMhNHZ1brhUuTQihSDQw84sXitK5VSqb7q188PGRdJGYgaCQTKEg47LMjQaqbV8jhGhLYnE8nWxhkJUSEHhz1Kc",
  "key18": "3eNg39sLwMg9jNevZ8QDaMAjYBvSn3edhRARWfgstyYDQmPBRkFf7X89VEqEvAqqL7Q3h6bZc2j2gjnjdSXRhY1Q",
  "key19": "4i3vtUSKGs8z5byfzXhDgaiFt8cxvSk84vRxUDz73HdSpFrusDbpbmNo4hb7cEBH9Xzi3CXNyZZTMrtt43iDn418",
  "key20": "4v6sc7FutRBvo4QfZijJDC6nS9AArNbGWjbJXXz6cjpy3BF93ZV11Ye4pSdWEtTV7zxM5unfdBoPL45mhrSa64ee",
  "key21": "4RtZuypyJEQEHUKYi4ieS2xrWUGTnGsnSAdRnwYfL3jaz8HHSu2vxhuz1TEL2ShEebAFScq9GVVxM33GwwowDy59",
  "key22": "2WijDKNMAnwmrEub1LxzLgdyWejBWLXm8sR66LZg1RaWvbxQ9ZoMLkrU6JsnopXR4Rqgfghu2qWfQqTN57sAteVn",
  "key23": "c38sExqtT1Tsf3xYSAtAj5D8i2uw3xYVdQbmov9fmRaoQt6RPeeKP3BknebgzQrm3m78tn6ENukxpFwodqy2CRp",
  "key24": "3paaVZZjkuvgQF9dQMatrNPRVM8qJtpjdP7muXmwWAquNVZz5aA1qdpZPr66GjnvJW6qzzd5e3jz2Lxg8qEV4VvR",
  "key25": "3XoRjdmtjANKoYXav5RxTA6KxTpx7ytpgUf8tvxoU5tmtZY8YmpD6e5yoa7oftEfZ9paCVopAFZdLXRSaMhuSTf7",
  "key26": "tqNxqkLnn1UneQGUCcBmLMw9tBLuej3ZW7bvdoRibDhu5Ni4yeD542P1HRVKEiVm3e9jAyuq7DXZCVYEg2HLLha"
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
