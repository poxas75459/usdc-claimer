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
    "4cRigXidX6Gxfe28SarVWhDcqjKszZdLRunPGHkiRS4jJsrFQMCV4GNj9FZatt98kkbt67RwxpeeUhuQSM1rovms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rmeUWYRJmjTBrKRqqyuZthdXtrqHDrkojLiKjXuxNmgM3ND4FKd88LVzZxabuu5SgfP8yDiy2nFRhRWLPVY13",
  "key1": "5kGMDy1bkkMX6pfXcTkwwFM1sjTe3JeMDBVWGd7Ga2xK7zzKWjbh4YR8PjnZWajTQ9LvoLsJyTF4Nbyfp2huUV2K",
  "key2": "2yNqigVGBAE699Kkxmcg3vBmFWW2yqTyVJ53cYZaxxPKtvPwaFNNeAJPC1dbegCtjW6qhyJWo2h9uDChUBi1de9N",
  "key3": "39qTyCanSyAi3PWFWaEMmexJmH92rkXGBrbfzufSxZFbzJ5rTD2GU9bG9oZWyqcQNAKH55J8vTNPwDR6yRit7fbo",
  "key4": "2e4jkqkkzzmhYcJUuMoTsP2NcBCRZZM1yZd14krPARijbsxbJRM2EfYyyP5s8WCQzpZmrKba6xaKFDbDtkumuwWW",
  "key5": "3KHzrYfPGXvXmTycBBto3KvZuLktuBrUAyzcViBQLStbynwkh9ULrxYZ57i6NdV6tutn29Gnhy2faUDrpknskaHA",
  "key6": "5he9knYsM2pwK1mR5XKXGksDTHULE4vdZwAGhed57eJKnobewjBAJeXFUKT5Zoj1pddmKWUC7AnvdevWrD7cG2mr",
  "key7": "2M6LEdZQWCHUwwLW7uhGxH5KTYeqvB2k36WQohLCBEKPa5W8CwnNGCVLMWmv7bzZmW3BT8c1goXpuNbDuY7Rvf4t",
  "key8": "5VTFtgNvBRijtpGcGfyqiFcGcujAhqzQFmaTKdcimpDGhcejsFbEkPYNsy2mvek3dwBA2i76Jp9RDvNKkgav7kiD",
  "key9": "5ovhd5guDAkVPFqd4n3CBtom5fEmNXBnMQ2qjCyrhBQYnXkJuRxLLqtTp5wwth58TqpJJgh71uFD3L1ixYmdG7NW",
  "key10": "2FkxZnFLA92LeiXCU3p6waUXimEeeSPrCAQKfeKZmgqUaTzzQ6mjSnCcMkk3HXJ9CeayLSreWupQcp3ow5ucgxGC",
  "key11": "2BBtm11DibzQGMmqgpupeyy7UqPRWy84YyiudnDuprRBEdUnxrX5ts1fEvpLt1Agpx2DZmWF1B1ScLdgHmBnt6d3",
  "key12": "31CqhKVxdwNjZGk5TTqUJtXhEo7AAMfmapoLwrZR7sto8kW5frTYbR3oocanmykGpx7JJgGkLyqNCLkfei5vYyKe",
  "key13": "5VxvoYshv4XcpBgeZUne9JFp3hqtkC5vptV9aS5eV962E6r52aU5x99RPWZ17uaBcuGsVYCRTL3sJrQvUVAviKvZ",
  "key14": "2CrxVde45um6qXxDLhz72G4hXD75tDTsC66XbM6a1HWQA4eeESFC4DY9FPQqr7mpLWbeL8BLF1st5MmxYeaSsjE5",
  "key15": "4CknoVoKma5Y5u2rMVZhtdjHqBtTxiQ19FjKEkeLAGdmQJ1AWNpiGqJeayTES5L9eRvser48VtoTUS7PRczeeWta",
  "key16": "4HsiLae6z17LfLohoEgjokT5ptQx6mKcffgrpwJQj3pnG6UFBn1EeoTzVavKcsYvuvXx8urNCEe1rhoUzjYRfu2n",
  "key17": "2reTfA1LvuBADL5jRfS8DmV5JtHgv39Ub8ecm4PniC89T9JbGjfyLJmZiadvG88sHEvZdtTJzBn6fxGYmauYdMdA",
  "key18": "jhLMeNGmNHhDKAUfmkbzHiBMkAxhHkpyYMgA551Xmw7hZapphduH3DHMJQdHDL3VXDBW88BpxK5jATp1kyeEwAG",
  "key19": "36CjU3YwGZrL69zdoCRQozjqSK3d58ZjDEiazVF4dU8F8ahN6XpMjZBnUzwNaffFuU1AkKivjCMVeXV4JYYNBiJw",
  "key20": "4sqbGaZJXkXt6D5G15eckob2LchDfwViQ8FyAVWAFNZG29ARoFxjFeerHvh5YjCRjfTsaNJWLunDw3tyC4WrXFbp",
  "key21": "2Y4VABRyQVaYR2Jo2R88fBn8PBeuMSnSrfKbnHBY3kr3Tsb6zD19nbFXXVWEAehkckYFw1eWfPneRrKcvQdpHsyx",
  "key22": "57TqUsJ833NSNFuroML81XWrYvpk393pCsaq3oUZE5RrbLzzQegikRCJLmvMDE2xhVfJr8P3SoYKbZMNxiCk1fkN",
  "key23": "3qaoMsjdbe1CnRcDpo6G7BpQmY5Z393JPvyWgK52WzUKTMJnsRh7S3fefCyPz6HAjzsPwFxgjUNQGek23EJy5Um5",
  "key24": "CXYEeJMWR3HvCeHQgEiqELeHL8toNhN24bdpjbDrto6Gh4Gwgni3Cmg13LfXqHos4rij2z4b3Hnhvfny4zrQYSK",
  "key25": "pqQC78oKY2uog39TrYhmTeNw52LE7z2PmScsTvCZvYJbitCMckReNrV8k878ngvptYLKYYCp9c7NqMkf3ctgXg9",
  "key26": "5t3SzHrzFWvVjJoodfjmWjF24y9pikuCLQj7CisExBniLRUg4H9f8TAnC1gUvD68eFz2SXXuPSoJcreaQGpPGS5Z",
  "key27": "26qLvHUbKLmeZLGHCmt1URMPEAZ5c67g15sR8Tg1HXx2AHtmy89PJ986jJRNKpAxn6CWqxktSzSixhB41u7sEYGS",
  "key28": "56yZ5uTNNk8vuyHHQz32LpJVkjiqiphAbrK1WYqMGB1MsMQGF7ZcQgb66xTQ3pEbBQrwc8YrjxTZTP99jh2NXf7d",
  "key29": "26fZCSCczzrjwPRfSsQVu59StQbhgzrGdSM5Ez2kwQuxCmT3TP3yCDBzbTiKbVreQ1EDaW9qfvkmPvfiaj3JtgKh"
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
