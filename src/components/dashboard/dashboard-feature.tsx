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
    "2tox75fqx33xVs3KwDkxhzg6PLYWnrCKPRBCXnLBBeVbvDhScEdgrHQQMayurvUXRr2v8xbeNcRSCkJoUvmxvVNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "haCh41sBT2tFeFcv18sSf3LjYxmd4ifXjvnBhnF6HzYJ4DFjy65CxMS1Z5QXUM13qeFsq3Mtwr3ykXe7KrPnR4b",
  "key1": "2kn74VHi3vy4ux8JBa7paPaUA5cbafi9Umor2LMY8gfaceRznhsSiBkU69YosuZksN3QfEwPynpd8Yi7udy2HeVv",
  "key2": "4kJT7mnZp7M6C2MSwCRxTvXiykzWo8TCkHL5m9nsjPrdyL8N92DpRgC7QeUPu28h48UNxKsFWPejjQtQqsJ75GVX",
  "key3": "kYWMRdWWNnM96LVC2qG9WWUDa4svnzd8avsvAxYgRoVC2XwD8j1LAFJ9YsU7qt5k1FWhwDMBtQkFvRTRDNF7uVF",
  "key4": "44EXkrPoKJQxwGjuRfCbdytcEip2qzmVGPCks5ce7gnCXHM2YmTpmK7PG9f9xbMTcqG3N4pW9yGWFyCDxXWWhbdk",
  "key5": "39tfXp9dTVuPdSShbmMRUXAuzVUmbwmMw93R2E5pFzAvzKbNbtZywQXXTcRke9gwhw6ED9fpkxkRsWV5EkNsdJLM",
  "key6": "39Jot6TE2ASZQMiHD7L1ECQd6svuRicPyTbgM8GZaqfkQFAKyjy8t3ENH6bRcMTHXXpbVztVSpbQjCtzHEMcR3pj",
  "key7": "449h2WosEGL47Tp82bhPdPWrY84y3xYdrLx5nhYqmh4qDssCdteDQgfQDVU4Vzt3NyYFAmCfgXHLkV6YpGDg2D2D",
  "key8": "3beZTFQmH5PEHYerm94zbUQU5X6sJozAVtm8nAApTMxL4zujbsURAcQNWfAjLX3Am9c9rR8Mx9PH4FfHWgpDphJA",
  "key9": "vnXC5c4FsHqH43tfJ7ryhPhAxj9NRDSAfcpjqLJNxTxyErTaZKi55HMJ1Udfxs3Pi5jdkK8KhVGVCanE6yvo8mF",
  "key10": "huss4igNgLSTQUxZVKMGiZMwxUTYZEQqwL1BdvNVsrnBRT1dg1Dd6ohpiHGkWa3AUwURnG5CYPnCJYFNJ2Dvn3i",
  "key11": "4AUnz6XgR76SB5HYtc2CjjgRa3SbMeiUDKoUzFnpLynnz3xzbKpNUsdmkWyDV1rAZ3YoR9vka37dvEa654ek3Vds",
  "key12": "5oBcFq5rGVfxPZhukXCGzrp1Kk1tcUhtUUqhTJhaZP5f5BrCFiMVhoEAkSLoSBUFLBzSQVNLxNYpcYPhgWGxeYQJ",
  "key13": "2K5ZoBBMRoTSrXzwnnzVPvGqhs14MoogcXxMGYFe9s9SyZ1t964odCaEoKYZd3eu6TErHVNJ57bFk8qSREoAAwHd",
  "key14": "2op4mY3zBZ5ZSwaapxU64UvmD8BaXpFU4ErMwyfhsjUvhN67JLs8dKdDDEnkecD82WzLV7zLLzX8DZ9oZJ7aAcx5",
  "key15": "5SCNnxJXFnNQfohCzzMZQ9LCHLcudvcLtMoHovuMMgetftqRsu6rSooL5Z5WJMimNCF6iyTDjja7GW3GH5FPCMMc",
  "key16": "dG6Lf4oXDiEuq9Shfd7scvFRYrrKfBRJsJnnnQyeyix2B4MaYMY4mCKCHmo5G4yAPXyfn6r1u7YKVtk8hrGnpn3",
  "key17": "5GhiNjTw9u7DX9N7DRrL23oNBRuDqCaA3JtRdADbCjVFGXcTx2d4hFe7fsmPk7Mw5rNsxoqV86TJzXTmBW4Zeivw",
  "key18": "5hfGQ2UF5Huu4mF5RU2YVCUa9yJS1kJsoeqLuyqVo82Ls8mKEcNF3QehWoS1MruaxsRoiket7fqqfceaEJE2FSsN",
  "key19": "4vyuMqJxvNFrXdW6XKsEKiKYgaUXwCGFtkSksWZHLc16umCpZpM2hjnp5sAnYgPV3RndRdyestn2YpjrJCEPtXv3",
  "key20": "AKpTEqGhAUnXjY9raiK2BfWxMYTcDrrWXPpkh7ozPDQftGLkL1a5eHzHyvtg64Zho6JyB9EJVpzmypRLw7QozdT",
  "key21": "2EpooRJzn3NDeegHWYwtAHzgtxU9t4goTRTM5LPXFAUCg5ycw5pHEPMyRQ8Fm361vwqmxMdSkhSbhRstfoYENVNz",
  "key22": "8UsLNUZT3nkBUSWWprRr1qPaMXzf313PPCWzhfhSNgsLf9tZTwCAAZWCkXpdd8ct4Pzy2b9YH77w62AXR6V7gZb",
  "key23": "4n9PMYyog98rEMPTm2Z4PJ1jvXhT2TZ7E8AhPk3K45d2b5fu1EB8zFFTR3QMRBms9CzhdGsKfeV3i4FaGJvH63LS",
  "key24": "5ae32DQ6ENwXLhQwm7fu8VCywtitYdLeaxa6ZQntbb4Hk2dfCpLHWUeTGMD4QTmiqh1n3QH5txceMsSM2kizZybq",
  "key25": "45suet7MZyFUnTrs5FBURdcMX9VxULV5SuCdYWmpAXtP5CMeHgCSPYAMKo7XDehY24jjz7m627zEGJG3oqCjMv84",
  "key26": "2YsytprzWhExYLPuQuT59e4ycjPjrMMchM4PWaTU3DRHqWrqmqZ3xfKnc5mkJYiyHnRoHfDE6odNL7AeFWgC51xT",
  "key27": "3xHnffbKVkPLf6dZ6oXTtdWVhYKXBLNNeeRigWSyedibpVfuwMBdwCcMdTFbngk1i72e9xXSpB1TnmtAFxaWbPMG",
  "key28": "38zzXsERze4jb2J6TfRQrSmupwCHciPja7DuWatRRJ8QKaP92oMPb14HXmqADN66VBk5eq2CjabJYTc2E9yAhdvK"
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
