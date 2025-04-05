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
    "5g8g43k4rZsttDGwK6wVcCz8a2Ff9fJ2V6Uku1KW5ZTKTVht19BsR7CktX2vxTJqveghASEKcAgChTWtSQBpn4vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qfwJyU2K4mMjCS7aJxV9yMhyHCyPiAkRBJBKGXuEZWSx9TKBdPUNpvV4dk7naZXeJFnNasV2UhpA1QSAMAsWwb",
  "key1": "BibjL4GgZWJHe1XEBbzb7z94wXprUmVPmeHgsMZCSMwFSyDvYgHCxgbzCQQAxR2HLBRZxgBnJN3SDqMRMiFxpyQ",
  "key2": "5Z4QYgmdDyLhmMBwsvyKvqkSsfDnHHCufjtpAspNU7RpeU71QGxFzReuBdJ84chDZAMNapC3T51aiLc8pJ3PRLb6",
  "key3": "5B62UuPk1kbr2AjdBwqxDR3kUrzgFsXbbtynFp1xTYRpbdDPjffcazGtzjYWwqrLXDYNBJb4atPfcbeqZCavBjM4",
  "key4": "31Ws5pgrrw9a8o3GGKWExx8c1C12TyZJ51QTzRPpi2fPqCgK2BkbLkMmm68acitRca4iyaV8aWSbuvHtMxAAXDRx",
  "key5": "3MuuMcpnAXXuUZW9UbaF5dy7UU8xPwYeh6uQUeeG7gshgQLDmwZMnDibpS1HQM2WuJEksXXbHNhWea2wCw8PJmbY",
  "key6": "35MiqEpaZyQrGKzTDNvJJFrsE57CukzMeSVBZCktekxuVPK9Rve1NcantXJ5GfYSiMPopYLXeeQJJXbdNJ6iQVeB",
  "key7": "5idS9F5qrqwG9xJB1XfXDtBGaM9uDniYFoWddLyPk1QBLZwrRdNBz1T6pUSnF5ButFDvvPAP6bWJcnmXaKqUtusE",
  "key8": "2mpsA4pEDww6vkNVrRQGsNCpYokxTw7KFcs6CxATN9hXnH6DotSzvSVZBWWXy4yJEx5dVfKcT31poNK2Hj5RoJGa",
  "key9": "3AZm7w6Gpcc6uM5KHzi24EJpRi397kgKXWrwna6XxBRR5hYzHkVSpzaayWNtN9fGhqz5f8vGALX83QJo127uaWSF",
  "key10": "4AWFRr6w8UcrbKhdQNFKScQqj2xdCk1Q8MTBCbLCogxCmRfq5vxrexknSxgXqXdh26WuNLwt5SmkaYsBHWRXNayK",
  "key11": "2ivKTKZmbp6Cd7MCo3SHRccyBg2WvTMzTZT7WhVMcNZDxtu4S8iaiepJxyhhQqWSgFzPkw3ZLbWbJY9NBKrhmAt2",
  "key12": "jEEXuTZfvRg5SB8q1p19UHVj6cxxg4PRdS2xur5kbBrZfzwQbEmFXoiesnQ8CN1Arc2kXkRRPg7sJD3xTUQRx9e",
  "key13": "3aRDqsYdLEovX9reswRqXLby1yfqRjAjnvNNSuX7n47MGiWsxGPV7wzNS5N5QFm6WeVyJ2S2P8Hh5mp9MB7YKiq",
  "key14": "5wr1fAA9JFWz7JRVnPscAxUYh4xJpU4FmbDzSNaQXxbzqLseiVV5nTrzk2RoQb6vzGrrdzRkFapTDmb7yMwJULY8",
  "key15": "2dbWv8oQriGtvSbtRJqwSLAYyCs2ugDSDyzzJ6aABnJFMCdSJqmMgJZYrMYUX5UVtBLsrNv7RbwVS9GycZX6gJsw",
  "key16": "59VySkRjpxKXL9YxkLqYC7HPJoTj1aXpwdk73aVuPp3Vw4zeXBzi6WT1TGayxjhxLqBVfbDapdcsDAdTLCSvZzH7",
  "key17": "4q87BgTyCx9f9YLabupvZFrcxbo5daiCcHQehW1JPrKcfWaDVEcNQkv1jhKJ753D8VttjVtwZ8zcxL5a2TEDL5Tx",
  "key18": "3UBxoUtYHiUxrB8d5mfrTJA98EFp3ZCEmLnheLR3iAoyyAjr7QvrqkPxB3FU3jJgABUuCeZVD92N2y7dc7BwJuiF",
  "key19": "3Usd7KqTjGbofbK59vsrM7nDLrxe6HB8Qm7hiudXNr8iEMQpLEnvBuxXdz3LBRqCeJKTr4y8LufBM9v3jGrmvKsX",
  "key20": "3c8bGfVxdM89F9v2UPNWQ736AuEfF5LdVRCLPeYWHEDyiDM1Nwq15MNdc8WStTNijnA51nzt35WoiRJnGxde5yXs",
  "key21": "3JtRyHibWZqkdmfgQHa938kz4uHLpskXeN9eooJVFAhGF84D2CCTtsE8RXhZvVU4QDJMtR1CMLVbmJT3jW3U4iMF",
  "key22": "kafYaSChdPnYrxNWmsLcYLV4PATpHdgiwcFWSeunWRMwJ7bmZxzmCAdHsgKJc8QxzFow6cnfKLTJ4vXzWNPvG3L",
  "key23": "5qe7mp7zL6b29YkGYkfMarM6StFXbejyR2QkLSEHUYjGX5dm51vdpyJBN3baoZQ8xiercegopDHpUmdZDjgpPypU",
  "key24": "2o1Yjhp99vL1meYAgifWXAMQZE354Gb8jnZuUEXxRTJky7zkfokriTbFm9QueRdnxL4sPqYnbK67GUsJaZXATVZw",
  "key25": "3uwJagc1AvTGuaNudUeVSf6xisAZjS4HmARrA1uZvPjWf1ud2ufSYzPRRKFGkXhTGg98jRrCBVLcDQYwfP1HULTq",
  "key26": "5DTkaYKXBSuCma8Y42mxJsc6C4McJJ88g3WuGavxooiQUeTQHkPTDMASLjpRNm8Dbw5xb99xRAgDs5XRidJrZTTu",
  "key27": "4ad8V1UWrs396ePk2F6Tq8s43LExJYVNck4PfRDayQ7tVY3CdtZkTRTfdXPmG1DnmB8zyw16pRNMiTeLgCoCpK9j"
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
